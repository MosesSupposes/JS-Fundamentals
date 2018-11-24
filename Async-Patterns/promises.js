// Let's pretend this function grabs an image from somewhere and returns that image as a promise
function loadImage(url) {
    return new Promise((resolve, reject) => {
        let image = new Image();
    
        image.onload = function() {
            resolve(image);
        }

        image.onerror = function() {
            let message = `Could not load iamge at ${url}`;
            reject(new Error(message));
        }
        image.src = url;
    });
}

// add an image to the DOM
function addImageToDOM(src) {
    let imgElement = document.createElement('img');
    imgElement.src = src;
    document.body.appendChild(imgElement);
}

/*
 load all images and append them to the DOM. This solution is way more elegant than
 trying to do the same thing with callbacks.
*/
Promise.all([
    loadImage('images/cat1.jpg'),
    loadImage('images.cat2.jpg'),
    loadImage('images/cat3.jpg')  
]).then(images => {
    images.forEach(img => addImageToDOM(img.src));
}).catch(error => {
    // handle error later
});

// This is the Callback Christmas Tree of Doom implemention of the code above:
loadImage('images/cat1.jpg', (error, img1) => {
    if (error) throw error;
    addImageToDOM(img1.src);
    loadImage('images/cat2.jpg', (error, img2) => {
        if (error) throw error;
        addImageToDOM(img2.src);
        loadImage('images/cat3.jpg', (error, img3) => {
            if (error) throw error;
            addImageToDOM(img3.src);
                // and so on...
        });
    });
});

// As you can see, with the promise implementaion (lines 29 -37), our code is shorter, more composable, and easier to reason about. This is the advantage of using promises over callbacks
