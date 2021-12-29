// Crop and convert images to grayscale.
const sharp = require("sharp");

// Receive the image ../img/base/sammy.png se recorta una porcion de la misma, 
// se pasan los colores a una escala de grises
//  y se guarda como ../img/result/sammy-cropped-grayscale.jpg.

async function cropImage() {
    try {
        await sharp("../img/base/sammy.png")
            // The width and height properties create a transparent box on top 
            // of the image that you want to crop.

            // Any part of the image that fits in the frame will be kept, and the rest will be cut off

            // The top and left properties control the position of the box.
            // 0, 0 Corresponds to the upper left vertex.

            .extract({
                width: 500, // The width of the area you want to crop.
                height: 330, // The height of the area you want to trim.
                left: 120, // The vertical position of the area you want to crop.
                top: 70 // The horizontal position of the area you want to crop.
            })
            //It will convert the image to grayscale.
            .grayscale()
            .toFile("../img/result/sammy-cropped-grayscale.jpg");
        console.log(`Image copy completed successfully.`);
    } catch (error) {
        console.log(`An error occurred during processing: ${error}.`);
    }
}

// Start the execution.
cropImage();