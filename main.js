Posts = {
  xml : {},
  get : function ( file ) {
    var xml = new XMLHttpRequest();   
    xml.onreadystatechange = function() {
      if ( xml.readyState == 4 && xml.status == 200 ) {
        Posts.xml[file] = xml;Posts.fetch(file);
      }
    };
    xml.open("GET", file + ".xml", true );   
    xml.send();
  },
  fetch : function ( file ) {
    var p = this.xml[file].responseXML['getElementsByTagName']( file ),c = this.xml[file].responseXML['getElementsByTagName']('all' + file )[0]['getAttribute']('config'),json = c ? JSON.parse( c ) : '',frag = document.createDocumentFragment();frag.innerHTML = document.getElementById('line-' + file).outerHTML;l = frag.cloneNode(true);
    for ( var i = 0; i < p.length; i++ ) {this[ file ]( p[i], json );}
  },
  posts : function ( p, config ) {
		var d = document.createElement('div'),sb = document.createElement('div');
		d.className='col-lg-4 col-md-6 text-center';sb.className='service-box';
		sb.innerHTML='<i class="fa fa-4x fa-paper-plane text-primary sr-icons"></i><i class="fa fa-4x fa-heart text-primary sr-icons"></i><h3 class="title">' + p['getElementsByTagName']('title')[0]['textContent'] + '</h3><p class="text-muted content">' + p['getElementsByTagName']('content')[0]['textContent'] + '</p>';d.appendChild(sb);document.getElementById('frases').appendChild(d);
  },
  categories : function ( p, config ) {
		var d = document.createElement('div');d.className='col-lg-4 col-sm-6';
		d.innerHTML = '<a href="#" class="portfolio-box"><img src="' + config.path + p['getElementsByTagName']('image')[0]['textContent']  + '" class="img-responsive" alt=""><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">Categoria</div><div class="project-name">' + p['getElementsByTagName']('title')[0]['textContent'] + '</div></div></div></a>';document.getElementById('pfs').appendChild(d);
  }
};
Posts.get( "posts");
Posts.get("categories")
