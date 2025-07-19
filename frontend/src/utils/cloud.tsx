
import { Cloudinary } from '@cloudinary/url-gen';

import { auto } from '@cloudinary/url-gen/qualifiers/format';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { improve } from '@cloudinary/url-gen/actions/adjust';


const cld = new Cloudinary({
  cloud: {
    cloudName: 'de7tyskql', // Replace with your Cloudinary cloud name
  },
});

/**
 * Generate a Cloudinary URL for an image with transformations
 * @param publicId - The public ID of the image in Cloudinary
 * @param width - The width of the image (optional)
 * @param height - The height of the image (optional)
 * @returns The full Cloudinary URL for the image
 */
export const getCloudinaryUrl = (
  publicId: string,
  width?: number,
  height?: number
): string => {
  const image = cld.image(publicId);

  // Apply transformations
  if (width && height) {
    image.resize(fill().width(width).height(height).gravity(autoGravity())); // Fixed missing parenthesis
  }
  // image.addAction(improve().mode("outdoor"));
  image.format(auto().toString()).quality(auto().toString());

  return image.toURL();
};
