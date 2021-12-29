// Composition of images using composite().
const sharp = require("sharp");

// Receive the image ../img/base/underwater.png, in a top layer the image is added
//  ../img/base/sammy-transparent.png in 50px 50px then it is saved in ../img/result/caramelos-underwater.jpg.

async function compositeImages() {
    try {
        await sharp("../img/base/underwater.png") // Base image.
            .composite([
                {
                    // Image overlay accepts Buffer, Uint8Array, or Uint8ClampedArray as input.
                    input: "../img/base/sammy-transparent.png", 
                    // Position of the centered image
                    top: 50, // 50px From the top edge of the base image.
                    left: 50, // 50px From the left edge of the base image.
                },
            ])
            .toFile("../img/result/caramelos-underwater.jpg");
        console.log(`Image edited completed successfully.`);
    } catch (error) {
        console.log(`An error occurred during processing: ${error}.`);
    }
}

// Start the execution.
compositeImages();