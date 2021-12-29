
# Download project dependencies.
npm i

## Read images and generate metadata.
npm run read-image
cd js && node readImage.js

## Image resizing, image formatting, and image compression.
npm run resize-image
cd js && node resizeImage.js

## Crop and convert images to grayscale.
npm run crop-image
cd js && node cropImage.js

## Rotating and blurring images.
npm run rotate-image
cd js && node rotateImage.js

## Image composition using composite().
npm run composite-images
cd js && node compositeImages.js

## Add text to a composite image().
npm run add-text-on-image
cd js && node addTextOnImage.js