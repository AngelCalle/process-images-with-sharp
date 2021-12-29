// Read an image and extract its metadata.
const sharp = require("sharp");

// Receive the image ../img/base/caramelos.jpg is accessed and the information
// stored in its metadata is printed.

async function getMetadata() {
    try {
        // Valid formats jpg and jpeg, png, gif, webp, avif, svg or tiff..
        const metadata = await sharp("../img/base/caramelos.jpg").metadata();
        console.log('Information: ' , {metadata: metadata});
    } catch (error) {
        console.log(`An error occurred during processing: ${error}.`);
    }
}

// Start the execution.
getMetadata();