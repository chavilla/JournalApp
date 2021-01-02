import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dixuoiuq6', 
    api_key: '861529966977887', 
    api_secret: 'vP2KzxSzTILgzwx978xnH69qfuk' 
  });

describe('fileUpload testing', () => {
   /*  test('should to uplad an image and return null', async (done) => {
      
        const response = fetch('https://i1.wp.com/www.madboxpc.com/wp-content/uploads/2012/01/google-chrome-newlogo.jpg?ssl=1');


        const blob = await response.blob;
        const file = new File([blob], 'googleLogo');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');
        
        // Delete image by Id
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png','');
        
        cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
            console.log('Eliminado');
            done();
        });
    })
 */
    test('should to return null', async () => {
      
        const file = new File([], 'googleLogo');

        const url = await fileUpload(file);

        expect(url).toBe(null);
    })
});