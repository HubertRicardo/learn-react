const getImagen = async () => {
  try {
    const apikey = "fsdf";
    const resp = await fetch(`https://adasdasdasd${apikey}`);
    const { data } = await resp.json();
    const { url } = data.imagenes.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
