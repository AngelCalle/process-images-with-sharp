// Resizing, image formatting and image compression.
const sharp = require("sharp");

// Receive the image ../img/base/caramelos.jpg the size is modified and compressed,
// then its format is changed and it is saved as ../img/result/caramelos-resized-compressed.jpg.

// check the weight in kilobytes of an image.
// in console cd img && cd resultb && du -h caramelos-resized-compressed.jpg

async function resizeImage() {
    try {
        await sharp("../img/base/caramelos.jpg")
            // Resize the image.
            .resize({
                width: 150,
                height: 97
            })
            // convert the resized image format from png to jpg,
            // method to change the image format and compress it.
            .toFormat("jpeg", { mozjpeg: true })
            // toFile Saves the image with the specified name and format.
            .toFile("../img/result/caramelos-resized-compressed.jpg");
        console.log(`Resize successfully completed.`);
    } catch (error) {
        console.log(`An error occurred during processing: ${error}.`);
    }
}

// Start the execution.
resizeImage();