import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import DropDownMenu from '../dropDownMenu';
import { height, width } from '../../utils/Dimension';


// Define the ref type for the component
export interface FilePickerModalRef {
  show: () => void,
  hide: () => void,
  cleanTempImages: () => void
}
// Define the props type for the component
type FilePickerModalProps = {
  onFilesSelected: (images: any) => void,
  multiple?: boolean;
}

const FilePickerModal= ({
  onFilesSelected, 
  multiple = false,
}: FilePickerModalProps, 
ref: any,
) => {
    const [isVisible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      },
      cleanTempImages() {
        ImagePicker.clean()
          .then(() => {
            console.log('removed all temp images from temp directory');
          })
          .catch(console.log);
      },
    }));

    function openCamera() {
      ImagePicker.openCamera({
        cropping: true,
        mediaType: 'photo',
        // compressImageQuality: 0.1,
      }).then(onFilesSelected);
    }

    function openGallery() {
      ImagePicker.openPicker({
        cropping: true,
        mediaType: 'photo',
        // compressImageQuality: 0.1,
        width:width(100),
        height:height(20),
        multiple: multiple,
      }).then(onFilesSelected);
    }

    function openPicker(type = 0) {
      setVisible(false);
      setTimeout(type === 0 ? openCamera : openGallery, 400);
    }

    return (
      <DropDownMenu
        isVisible={isVisible}
        firstBtnText="Take Photo"
        secondBtnText="Choose from Library"
        onPressFirstBtn={() => openPicker(0)}
        onPressSecondBtn={() => openPicker(1)}
        onClose={() => setVisible(false)}
      />
    );
  }

export default forwardRef(FilePickerModal);
