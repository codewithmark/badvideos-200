function isMobileDevice() 
{
  return ( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) ); 
}

/*
if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) 
{
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
*/




var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = { // for Android
    banner: 'ca-app-pub-7228106559462972/2931165514',
    interstitial: 'ca-app-pub-7228106559462972/4407898711'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-7228106559462972/2931165514',
    interstitial: 'ca-app-pub-7228106559462972/4407898711'
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-7228106559462972/2931165514',
    interstitial: 'ca-app-pub-7228106559462972/4407898711'
  };
}

function main(TypeOfAd)
{
    if(isMobileDevice()) 
    {
      //document.addEventListener('deviceready', initApp, false);
      initApp();

    } 
    else 
    {
      initApp();
    }
}


function ShowAd(TypeOfAd) 
{
  //if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  if (AdMob )
  {
    var TypeOfAd = TypeOfAd.toLowerCase();

    if(TypeOfAd == 'fullscreen')
    {
      // this will load a full screen ad on startup
      AdMob.prepareInterstitial(
      {
        adId: admobid.interstitial,
        isTesting: true, // TODO: remove this line when release
        autoShow: true
      });
       
    }
    else if(TypeOfAd =='footer')
    {
      // this will create a banner on startup
      AdMob.createBanner( {
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        isTesting: true, // TODO: remove this line when release
        overlap: false,
        offsetTopBar: false,
        bgColor: 'white'
      } );
       

    }
    else
    {
      // this will create a banner on startup
      AdMob.createBanner( {
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        isTesting: true, // TODO: remove this line when release
        overlap: false,
        offsetTopBar: false,
        bgColor: 'white'
      } );
      callback('data');
    } 
  }  
} 
