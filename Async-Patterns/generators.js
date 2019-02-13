/* There are two main reasons why you would want to use generators: 
    1.) They provide a higher-level abstraction to iterables
    2.) They provide a newer control-flow to help with things like "callback-hell" 
*/

// View index.html to see generators, A.K.A. pausable functions, in action

const mainDisplay = document.querySelector('#mainDisplay')
const errorDisplay = document.querySelector('#errorDisplay')
const startButton = document.querySelector('#startButton')
const stopButton = document.querySelector('#stopButton')
const scriptChoice = document.querySelector('#scriptChoice')
const speedChoice = document.querySelector('#speedChoice')

const state = {
    running: false,
    exhausted: false,
    currentIterator: null
    // currentScript
    // currentSpeed
    // I didn't want to initialize the above two varialbes here, but know they will exist

}

const scripts = {
    alphabetSong: {
        interruptMessage: "Don't be rude! Wait until I'm done singing!",
        content: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Now I know my ABC's, next time won't you sing with me!"]
    },
    director: {
        interruptMessage: "Get off the set, we're recording!",
        content: ["Three", "Two", "One", "Action!"]
    }
}

// Capture the script and playback speed the user entered
function getUserInput() {
    var input = []
    switch(scriptChoice.value) {
        case "Sing ABC's": 
            input.push(scripts.alphabetSong)
            break
        case "Direct Movie":
            input.push(scripts.director)
            break
        default:  console.error('invalid script:', scriptChoice.value)
    }
    
    switch(speedChoice.value) {
        case "Slow": 
            input.push(1250)
            break
        case "Normal": 
            input.push(1000)
            break
        case "Fast":
            input.push(500)
            break
            case "Super Fast":
            input.push(150)
            break
        default:  console.error('invalid speed choice:', speedChoice.value)
    }

    return input
}

// yield each item in a given iterable, one after the other
function *eachItemGen(arr) {
    for (item of arr) {
        yield item
    }
}

function wait(cb, time) {
    return setTimeout(cb, time)
}

function renderItem(item, container) {
    const itemRenderedBefore = childOfContainer = container.querySelector('p')

    // Replace the text content of the first <p> in the container param with the  param. If there is no <p> in the specified container, create a p and set its text to the .
    if (itemRenderedBefore) {
        childOfContainer.textContent = item
    } else {
        const itemToRender = document.createElement('p')
        itemToRender.textContent = item
        container.appendChild(itemToRender)
    }
}

// Iterate through the specified generator until it's done yielding values. On each iteration, render the value to the main display.
function exhaust(iterator=eachItem(), speed=500) {
    state.currentIterator = iterator
    state.running = true

    // Recursively iterate through the generator until is done yielding values -- or is paused
    function iterateThroughCompletion(iterator) {
        let item = iterator.next()
        let doneIterating = item.done 
        let paused = (!doneIterating && state.running == false)

        if (!doneIterating && !paused) {
            renderItem(item.value, mainDisplay)
            wait(iterateThroughCompletion.bind(null, iterator), speed)
        } else {
            // The generator exhasuted all its values or is currently paused.
            // In the event that it exhausted all its values, set running state to false so that the script can be restarted by simply re-pressing the start button.
            if (doneIterating) state.exhausted = true
            state.running = false
        }
        return iterator
    }

    return iterateThroughCompletion(iterator)
}

// Start the script when the user clicks 'Start'
startButton.addEventListener('click', function startScript() {
    var [scriptChoice, speedChoice=1000] = getUserInput()
    state.currentIterator = state.currentIterator || eachItemGen(scriptChoice.content)
    // Either the script was paused, or the generator has run out of values to yield
    if (!state.running) {
        state.previousScript = state.currentScript
        state.previousSpeed = state.currentSpeed
        state.currentScript = scriptChoice
        state.currentSpeed = speedChoice

        // Why did the generator stop running? 
        // Are the seleceted scripts the same, but the user paused it before it ran through completion?
        if ((state.previousScript == state.currentScript) && (!state.exhausted)) {
            // If so, resume the generator with the same state
            exhaust(state.currentIterator, state.currentSpeed)
        } else {
            // Otherwise, start yielding from a new generator (either change scripts and start iterating, or restart the same script. Either way we need a new generator.)
            state.currentIterator = exhaust(eachItemGen(scriptChoice.content), speedChoice) // exhaust returns its given iterator
        }
    } else {
        // The user is being rude and interrupting the current script. Yell at them.
        renderItem(state.currentScript.interruptMessage, errorDisplay)
    }
})

// Pause the script when the user clicks 'Stop'
stopButton.addEventListener('click', function stopScript() {
    state.running = false
    // Clear the error display
    renderItem('', errorDisplay)
})

// So there you have it, pausable output using ES6 generators. 

// There's way more to generators than what I showcased here. Other features include two-way data passing via next (ex: the code controlling the generated values can pass information back to the generator using .next('someValue')). You can also do some pretty neat things with yield such as yielding all the values of an iterable (ex: yield* [1,2,3] will yield each item of the array one by one). You can even yield control to another generator using yield* syntax. I will demonstrate more advanced use-cases of generators in the future.
