export const fileUpload = async (file) => {
    
    const cloudUrl = '	https://api.cloudinary.com/v1_1/dixuoiuq6/upload';
    const formData = new FormData();

    formData.append('upload_preset', 'JournalApp');
    formData.append('file', file);

    try {
        
        const response = await fetch(cloudUrl , {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const cloudUrl = await response.json();
            return cloudUrl.secure_url;
        }
        else {
           return null;
        }

    } catch (error) {
        console.log(error);
    }
}