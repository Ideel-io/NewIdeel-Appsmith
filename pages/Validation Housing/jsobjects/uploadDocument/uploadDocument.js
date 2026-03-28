export default {
  async uploadDocument(file, presignedUrl) {
  const base64ToUint8Array = (base64) => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    return new Uint8Array(byteNumbers);
  };

  const base64Data = file.data.split(',')[1];
  const byteArray = base64ToUint8Array(base64Data);

  try {
    const uploadResponse = await fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: byteArray,
    });

    if (uploadResponse.ok) {
      console.log(`${file.name} uploaded successfully.`);
      return true;
    } else {
      console.error(`Failed to upload ${file.name}`, uploadResponse);
      return false;
    }
  } catch (error) {
    console.error(`Error uploading ${file.name}`, error);
    return false;
  }
},
	
 async uploadIdentityRecto() {
  const files = Identite_File_Picker_Recto.files;
  if (!files || files.length === 0) {
    showAlert('Please select a file to upload', 'warning');
    return;
  }

  if (!SelectProfile.selectedOptionValue) {
    showAlert('Please select a profile', 'warning');
    return;
  }

  const documentsInput = Array.from(files).map((file) => ({
    userId: appsmith.URL.queryParams.userId,
    folderId: SelectProfile.selectedOptionValue,
    label: "IDENTITY_RECTO",
    fileName: file.name,
    contentType: file.type,
  }));

  try {
    const response = await requestUploadDocuments.run({
      documentsInput,
    });

    const presignedUrls = response.data.requestUploadDocuments;

    if (presignedUrls.length !== files.length) {
      showAlert('Mismatch between files and presigned URLs', 'error');
      return;
    }

    const uploadPromises = Array.from(files).map((file, index) =>
      this.uploadDocument(file, presignedUrls[index])
    );

    const uploadResults = await Promise.all(uploadPromises);

    const allUploadsSuccessful = uploadResults.every(result => result);
    if (allUploadsSuccessful) {
      showAlert('File uploaded successfully', 'success');
    } else {
      showAlert('Some files failed to upload', 'warning');
    }

    await getDocuments.run();
  } catch (error) {
    showAlert('Error uploading file', 'error');
    console.error('Error:', error);
  }
},

async uploadIdentityVerso() {
  const files = Identite_File_Picker_Verso.files;
  if (!files || files.length === 0) {
    showAlert('Please select a file to upload', 'warning');
    return;
  }

  if (!SelectProfile.selectedOptionValue) {
    showAlert('Please select a profile', 'warning');
    return;
  }

  const documentsInput = Array.from(files).map((file) => ({
    userId: appsmith.URL.queryParams.userId,
    folderId: SelectProfile.selectedOptionValue,
    label: "IDENTITY_VERSO",
    fileName: file.name,
    contentType: file.type,
  }));

  try {
    const response = await requestUploadDocuments.run({
      documentsInput,
    });

    const presignedUrls = response.data.requestUploadDocuments;

    if (presignedUrls.length !== files.length) {
      showAlert('Mismatch between files and presigned URLs', 'error');
      return;
    }

    const uploadPromises = Array.from(files).map((file, index) =>
      this.uploadDocument(file, presignedUrls[index])
    );

    const uploadResults = await Promise.all(uploadPromises);

    const allUploadsSuccessful = uploadResults.every(result => result);
    if (allUploadsSuccessful) {
      showAlert('File uploaded successfully', 'success');
    } else {
      showAlert('Some files failed to upload', 'warning');
    }

    await getDocuments.run();
  } catch (error) {
    showAlert('Error uploading file', 'error');
    console.error('Error:', error);
  }
},
	
	async uploadPreviousContracts() {
  const files = Previous_Contract_File_Picker.files;
  if (!files || files.length === 0) {
    showAlert('Please select files to upload', 'warning');
    return;
  }

  const documentsInput = Array.from(files).map((file, index) => ({
    userId: appsmith.URL.queryParams.userId, 
    folderId: appsmith.URL.queryParams.recurrentSubscriptionId, 
    label: "PREVIOUS_CONTRACT",
    fileName: file.name,
    contentType: file.type,
  }));

  try {
    const response = await requestUploadDocuments.run({
			documentsInput
		});

    const presignedUrls = response.data.requestUploadDocuments;

    if (presignedUrls.length !== files.length) {
      showAlert('Mismatch between files and presigned URLs', 'error');
      return;
    }

    const uploadPromises = Array.from(files).map((file, index) =>
      this.uploadDocument(file, presignedUrls[index])
    );

    const uploadResults = await Promise.all(uploadPromises);

    const allUploadsSuccessful = uploadResults.every(result => result);
    if (allUploadsSuccessful) {
      showAlert('All files uploaded successfully', 'success');
    } else {
      showAlert('Some files failed to upload', 'warning');
    }

    await getDocuments.run();
  } catch (error) {
    showAlert('Error uploading files', 'error');
    console.error('Error:', error);
  }
},
	
	async deleteDocument(label, fileName) {
		try{
			
			const documentKey = `${appsmith.URL.queryParams.userId}/${appsmith.URL.queryParams.recurrentSubscriptionId}/${label}/${fileName}`;
			
			await deleteDocument.run({
				documentKey
			});

			if (deleteDocument.data.errors) throw new Error(deleteDocument.data.errors[0].message);
			
			await getDocuments.run();

			await showAlert('Document Supprimé !', 'success');
		} catch(error){
			showAlert(`Suppression impossible ! (${error.message})`, 'error');
		}
	},

};