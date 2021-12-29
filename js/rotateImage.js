// Rotation and blurring of images.
const sharp = require("sharp");

// Receive the image ../img/base/caramelos.jpg, it is rotated 33 degrees adding transparent background
// to the spaces created in empty, it is blurred by an amount of 4 and then it is saved
// like ../img/result/caramelos-rotated-blurred.png.

async function rotateImage() {
    try {
        await sharp("../img/base/caramelos.jpg")
            .rotate(
                33, // Rotate the image at an angle of 33 degrees.
                // To remove the black background and make it transparent add background.
                {
                    background: {
                        r: 0,
                        g: 0,
                        b: 0,
                        alpha: 0
                    }
                })
            .blur(4) // Blur the image. Valid values between 0.3 and 1000.
            .toFile("../img/result/caramelos-rotated-blurred.png");
        console.log(`Image rotated and out of focus correctly.`);
    } catch (error) {
        console.log(`An error occurred during processing: ${error}.`);
    }
}

// Start the execution.
rotateImage();