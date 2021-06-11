const showRelocationToastr = () => {
  toastr.info(
    "Once the download is complete, please fill out the form and send it to mypet@petsparadise.co.ke.",
    "Downloading the relocation agreement form...",
    {
      timeOut: 30000,
      closeButton: true,
    }
  );
};
