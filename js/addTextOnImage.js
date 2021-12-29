// Add text to an image composite().
const sharp = require("sharp");

// Receive the image ../img/base/caramelo.jpg, an svg is created with the indicated text,
// an image of said is saved svg ../img/result/svg-text.png, the text is superimposed on the image,
// later it is saved../img/result/caramelos-text.jpg

async function addTextOnImage() {
    try {

        const url_image = "../img/base/caramelos.jpg";
        // It obtains the measures of the image to be able to create the svg with these same measures.
        const metadata = await sharp(url_image).metadata();
        const width = metadata.width;
        const height = metadata.height;
        const text = "Caramelo";

        // Create an svg with the indicated text.
        const svgImage = `
            <svg width="${width}" height="${height}">
                <style>
                    .title {
                        fill: rgba(255,255,255, 0.5);
                        font-size: 120px;
                        font-weight: bold;
                    }
                </style>
                <text x="50%" y="50%" text-anchor="middle" class="title">${text}</text>
            </svg>
        `;

        const svgBuffer = Buffer.from(svgImage);
        
        // Save the svg text to an image.
        await sharp(svgBuffer).toFile("../img/result/svg-text.png");

        await sharp(url_image)
            .composite([{
                input: svgBuffer, // Another option is input: './logo.png',.
                gravity: 'center' //Another option is top: 0, left: 0,.
            }])
            .sharpen()
            .withMetadata()
            .toFile("../img/result/caramelos-text.jpg");
        console.log(`Image edited and saved correctly.`);
    } catch (error) {
        console.log(`An error occurred during processing: ${error}.`);
    }
}

// Start the execution.
addTextOnImage();