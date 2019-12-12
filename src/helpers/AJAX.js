class AJAX {

  async getData(url){
    let data, objects = null

    if( !localStorage.getItem("PRODUCTOS") ){

      data = await fetch( url )
      objects = await data.json()
      await localStorage.setItem("PRODUCTOS", JSON.stringify(objects))

    } else {

      data = localStorage.getItem("PRODUCTOS")
      objects = JSON.parse( data )

    }

    return objects
  }

}
export default AJAX
