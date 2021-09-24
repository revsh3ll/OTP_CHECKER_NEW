		<!DOCTYPE html>

<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="MobileOptimized" content="width" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Login</title>
	
	 <script type="text/javascript" src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/js/jquery.min.js" charset="utf-8"></script>
	 <script type="text/javascript" src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/js/bootstrap.min.js" charset="utf-8"></script>
	 	 <script type="text/javascript" src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/js/bootstrap-dialog.min.js" charset="utf-8"></script>
     <script type="text/javascript" src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/js/jquery-ui.min.js" charset="utf-8"></script>
     <script type="text/javascript" src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/js/jquery.placeholder.min.js" charset="utf-8"></script>
	 
  
 
  <link href="https://wifizone.actcorp.in/ACTWifiHotspot-theme/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://wifizone.actcorp.in/ACTWifiHotspot-theme/css/main.css" type="text/css" rel="stylesheet" />
  <link href="https://wifizone.actcorp.in/ACTWifiHotspot-theme/css/main1.css" type="text/css" rel="stylesheet" />
  
  
     <script>
     if (!String.prototype.includes) {
				    String.prototype.includes = function() {
				        'use strict';
				        return String.prototype.indexOf.apply(this, arguments) !== -1;
				    };
				}
  $(function() {
    $( "#accordion" ).accordion({
           collapsible: true,
           active: false,
           heightStyle: "content"
    });
  });
  $(document).ready(function(){
 if(/param1=([^&]+)/.exec(window.location) != null)
  sessionStorage.vlan_id= /param1=([^&]+)/.exec(window.location)[1];
var vlanid_chn = ["3951-3951","3954-3951","3955-3951","3951-3952","3951-3953","3953-3951","3952-3951","3955-3952","3657","3834-101","3835-101","3768-101","3834-102","3834-103","3834-104","3834-105","3834-106","3834-107","3834-108","3834-109","3834-110","3834-111","3834-112","3834-113","3834-114","3834-115","3834-116","3834-117","3834-118","3834-119","3834-120","3835-102","3835-103","3835-104","3835-105","3835-106","3835-107","3835-108","3835-109","3835-110","3835-111","3835-112","3835-113","3835-114","3835-115","3835-116","3835-117","3835-118","3835-119","3835-120","3738-101","3738-102","3738-103","3738-104","3738-105","3738-106","3738-107","3738-108","3738-109","3738-110","3738-3430","3738-3431","3738-3432","3738-3433","3738-3434","3738-3435","3738-3436","3738-3437","3738-3438","3738-3439","3738-3440","3738-3441","3738-3442","3738-3443","3738-3444","3738-3445","3738-3446","3738-3447","3738-3448","3738-3449","2646-3430","2646-3431","2646-3432","2646-3433","2646-3434","2646-3435","2646-3436","2646-3437","2646-3438","2646-3439","2646-3440","2646-3441","2646-3442","2646-3443","2646-3444","2646-3445","2646-3446","2646-3447","2646-3448","2646-3449","2647-3430","2647-3431","2647-3432","2647-3433","2647-3434","2647-3435","2647-3436","2647-3437","2647-3438","2647-3439","2647-3440","2647-3441","2647-3442","2647-3443","2647-3444","2647-3445","2647-3446","2647-3447","2647-3448","2647-3449","2648-3430","2648-3431","2648-3432","2648-3433","2648-3434","2648-3435","2648-3436","2648-3437","2648-3438","2648-3439","2648-3440","2648-3441","2648-3442","2648-3443","2648-3444","2648-3445","2648-3446","2648-3447","2648-3448","2648-3449","2649-3430","2649-3431","2649-3432","2649-3433","2649-3434","2649-3435","2649-3436","2649-3437","2649-3438","2649-3439","2649-3440","2649-3441","2649-3442","2649-3443","2649-3444","2649-3445","2649-3446","2649-3447","2649-3448","2649-3449","2650-3430","2650-3431","2650-3432","2650-3433","2650-3434","2650-3435","2650-3436","2650-3437","2650-3438","2650-3439","2650-3440","2650-3441","2650-3442","2650-3443","2650-3444","2650-3445","2650-3446","2650-3447","2650-3448","2650-3449","2651-3430","2651-3431","2651-3432","2651-3433","2651-3434","2651-3435","2651-3436","2651-3437","2651-3438","2651-3439","2651-3440","2651-3441","2651-3442","2651-3443","2651-3444","2651-3445","2651-3446","2651-3447","2651-3448","2651-3449","2652-3430","2652-3431","2652-3432","2652-3433","2652-3434","2652-3435","2652-3436","2652-3437","2652-3438","2652-3439","2652-3440","2652-3441","2652-3442","2652-3443","2652-3444","2652-3445","2652-3446","2652-3447","2652-3448","2652-3449","2653-3430","2653-3431","2653-3432","2653-3433","2653-3434","2653-3435","2653-3436","2653-3437","2653-3438","2653-3439","2653-3440","2653-3441","2653-3442","2653-3443","2653-3444","2653-3445","2653-3446","2653-3447","2653-3448","2653-3449","2654-3430","2654-3431","2654-3432","2654-3433","2654-3434","2654-3435","2654-3436","2654-3437","2654-3438","2654-3439","2654-3440","2654-3441","2654-3442","2654-3443","2654-3444","2654-3445","2654-3446","2654-3447","2654-3448","2654-3449","3834-3430","3834-3431","3834-3432","3834-3433","3834-3434","3834-3435","3834-3436","3834-3437","3834-3438","3834-3439","3834-3440","3834-3441","3834-3442","3834-3443","3834-3444","3834-3445","3834-3446","3834-3447","3834-3448","3834-3449","3835-3430","3835-3431","3835-3432","3835-3433","3835-3434","3835-3435","3835-3436","3835-3437","3835-3438","3835-3439","3835-3440","3835-3441","3835-3442","3835-3443","3835-3444","3835-3445","3835-3446","3835-3447","3835-3448","3835-3449"];
var vlanid_blr = ["3917-3901","3915-3901","3917-3900","3915-3900","3181-3165","3189-101","3196-101","3192-3192","3189","3184","3183-101","3197-102","3182-101","3181-3181","3194-3194","3194-103","3194-104","3181-2000","3190-101","3150-101","3198-101","3181-1998","3185-400","3198-102","3181-102","3181-1999","3827-101","3181-3175","3181-3177","3181-1333","3181-3171","2556-3444","2556-3445","3181-3188","3181-2999","3181-3344","2556-101","2556-102","3181-3200","2556-103","2556-105","3187-110","3181-3399","3036-1255","3187-111","3197-301","3181-1996","3197-302","3196-102","3181-1997","3181-1995","2202-2296","3048-152","3181-2666"];
//alert(vlanids.length);
if(sessionStorage.vlan_id !=null & sessionStorage.vlan_id!="" && vlanid_chn.indexOf(sessionStorage.vlan_id)!=-1) {
$('#divmarque').css("display","none");
$("#ban1").attr("src","https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/wifi-chn-web.png");
$("#ban1-mb").attr("src","https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/hotspot-spot-mob-chn.png");
$("#hyfi-logo").hide();
$("#act-logo").attr("src","https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/act-logo-chn.png");
$("#main_logo").attr("src","https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/main-logo-chn.png");
$("#wifi_msg").text('Connect to ACT Fibernet wifi zone and enjoy incredible experience');
$("#wifi_msg_mob").text('Connect to ACT Fibernet wifi zone and enjoy incredible experience');
$("#tag").hide();
}
else if(sessionStorage.vlan_id !=null & sessionStorage.vlan_id!="" && vlanid_blr.indexOf(sessionStorage.vlan_id)!=-1) {
$('#divmarque').css("display","none");
$("#ban1").attr("src","https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/wifi-blr-web.png");
$("#ban1-mb").attr("src","https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/hotspot-spot-mob-blr.png");
$("#main_logo").hide();
$("#hyfi-logo").hide();
$("#act-logo").attr("src","https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/act-logo-blr.png");
$("#wifi_msg").text('Connect to ACT Fibernet wifi zone and enjoy incredible experience');
$("#wifi_msg_mob").text('Connect to ACT Fibernet wifi zone and enjoy incredible experience');
$("#tag").hide();
} else {
	$('#divmarque').css("display","block");
}
  
  if(typeof(sessionStorage.vlan_id) != "undefined"){
  
  $('#welcomeMsg').text('Welcome to Wi-Fi powered by  ACT Fibernet');
	  if(sessionStorage.vlan_id=='2224-2273') {
		 $("#f1").show();
		}
  
  
  if(sessionStorage.vlan_id=='3738-3448' || sessionStorage.vlan_id=='2205-2237' ||sessionStorage.vlan_id=='2647-3448' || sessionStorage.vlan_id=='2648-3448' || sessionStorage.vlan_id=='2649-3448' || sessionStorage.vlan_id=='2650-3448' || sessionStorage.vlan_id=='2651-3448' || sessionStorage.vlan_id=='2652-3448' || sessionStorage.vlan_id=='2653-3448' || sessionStorage.vlan_id=='2654-3448') {
	$("#logo9").width(380);
$("#logo9").height(280);
$("#logo9").css( { "margin-left" : "-109px", "margin-bottom" : "-10px","padding-top" : "8px", "padding-right" : "10px", "padding-bottom" : "8px", "padding-left" : "10px" } );
  
	$("#logo9").attr("src","https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/chlogo.png");
	//$('#welcomeMsg').text('This is an initiative taken up by Greater Chennai Corporation      in association with ACT Fibernet');
	$('#welcomeMsg').text('');
	
	/*
	$('#wrapper').addClass('techwidth');
    $('#chnlocation').addClass('chnBackgrnd');
  
    $(".my-logo").hide();
	$(".cust-logo").css("width",'100%');
	$(".cust-logo").css("height",'65vh');
	$(".cust-logo img").css("width",'100%');
	$(".cust-logo img").css("height",'110vh');
	*/
  } else {
			$("#logo9").attr("src","https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/logo.png");
  }
  
  var img_path="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/"+sessionStorage.vlan_id+"/";
 // $(".cust-logo img").attr("src",img_path+"cust-logo.png");
  $('.hotspot-name').text(sessionStorage.org_name);
    if(sessionStorage.vlan_id=='2241-2201'||sessionStorage.vlan_id=='2216-2229'||sessionStorage.vlan_id=='3181-1998'){
	
	
   $(".my-logo").css("width",240);
    $(".my-logo img").css("width",240);
	}
	if((sessionStorage.vlan_id=='2216:2228')||(sessionStorage.vlan_id=='3834-101')||(sessionStorage.vlan_id=='3834-102')||(sessionStorage.vlan_id=='3834-103')||(sessionStorage.vlan_id=='3834-104')||(sessionStorage.vlan_id=='3834-105')||(sessionStorage.vlan_id=='3834-106')||(sessionStorage.vlan_id=='3834-107')||(sessionStorage.vlan_id=='3834-108')||(sessionStorage.vlan_id=='3834-109')||(sessionStorage.vlan_id=='3834-110')||(sessionStorage.vlan_id=='3834-111')||(sessionStorage.vlan_id=='3834-112')||(sessionStorage.vlan_id=='3834-113')||(sessionStorage.vlan_id=='3834-114')||(sessionStorage.vlan_id=='3834-115')||(sessionStorage.vlan_id=='3834-116')||(sessionStorage.vlan_id=='3834-117')||(sessionStorage.vlan_id=='3834-118')||(sessionStorage.vlan_id=='3834-119')||(sessionStorage.vlan_id=='3834-120')||(sessionStorage.vlan_id=='3835-101')||(sessionStorage.vlan_id=='3835-102')||(sessionStorage.vlan_id=='3835-103')||(sessionStorage.vlan_id=='3835-104')||(sessionStorage.vlan_id=='3835-105')||(sessionStorage.vlan_id=='3835-106')||(sessionStorage.vlan_id=='3835-107')||(sessionStorage.vlan_id=='3835-108')||(sessionStorage.vlan_id=='3835-109')||(sessionStorage.vlan_id=='3835-110')||(sessionStorage.vlan_id=='3835-111')||(sessionStorage.vlan_id=='3835-112')||(sessionStorage.vlan_id=='3835-113')||(sessionStorage.vlan_id=='3835-114')||(sessionStorage.vlan_id=='3835-115')||(sessionStorage.vlan_id=='3835-116')||(sessionStorage.vlan_id=='3835-117')||(sessionStorage.vlan_id=='3835-118')||(sessionStorage.vlan_id=='3835-119')||(sessionStorage.vlan_id=='3835-120')){
	   $('#wrapper').addClass('techwidth');
 	  $('#chnlocation').addClass('chnBackgrnd');
	 $(".my-logo").hide();
	$(".cust-logo").css("width",'100%');
	$(".cust-logo").css("height",'65vh');
	$(".cust-logo img").css("width",'100%');
	$(".cust-logo img").css("height",'110vh');
	}
  
  
  document.title = "Welcome";
  //document.title = "Welcome to "+sessionStorage.org_name;
  }else if((window.location.href.indexOf("param1=") != -1)){
  
   var json_path="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/site.json";
   var vlanId = /param1=([^&]+)/.exec(window.location)[1];
   var folder="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/"+vlanId+"/";
   
    
   if(vlanId=='2222-2250') {
	$('#welcomeMsg').text('Enjoy High Speed Wi-Fi @ Comicon India-2019 HYDERABAD                       powered by ACT FIBERNET');
   }
   if(vlanId=='2241-2201'||vlanId=='2216-2229'||vlanId=='3181-1998'){   
     
   
    $(".my-logo").css("width",240);
	$(".my-logo img").css("width",240);
   } 
  if((vlanId=='3834-101')||(vlanId=='3834-102')||(vlanId=='3834-103')||(vlanId=='3834-104')||(vlanId=='3834-105')||(vlanId=='3834-106')||(vlanId=='3834-107')||(vlanId=='3834-108')||(vlanId=='3834-109')||(vlanId=='3834-110')||(vlanId=='3834-111')||(vlanId=='3834-112')||(vlanId=='3834-113')||(vlanId=='3834-114')||(vlanId=='3834-115')||(vlanId=='3834-116')||(vlanId=='3834-117')||(vlanId=='3834-118')||(vlanId=='3834-119')||(vlanId=='3834-120')||(vlanId=='3835-101')||(vlanId=='3835-102')||(vlanId=='3835-103')||(vlanId=='3835-104')||(vlanId=='3835-105')||(vlanId=='3835-106')||(vlanId=='3835-107')||(vlanId=='3835-108')||(vlanId=='3835-109')||(vlanId=='3835-110')||(vlanId=='3835-111')||(vlanId=='3835-112')||(vlanId=='3835-113')||(vlanId=='3835-114')||(vlanId=='3835-115')||(vlanId=='3835-116')||(vlanId=='3835-117')||(vlanId=='3835-118')||(vlanId=='3835-119')||(vlanId=='3835-120')){
    
    $('#wrapper').addClass('techwidth');
    $('#chnlocation').addClass('chnBackgrnd');
  
    $(".my-logo").hide();
	$(".cust-logo").css("width",'100%');
	$(".cust-logo").css("height",'65vh');
	$(".cust-logo img").css("width",'100%');
	$(".cust-logo img").css("height",'110vh');
 
	}
   
   jQuery.getJSON( json_path, function( result ) { 
      result.hotspots=jQuery.grep(result.hotspots, function( n, i ){return n.id === vlanId;});
      console.log(result.hotspots.length);
      if(result.hotspots.length == 1){
	  
      jQuery.each(result.hotspots, function(i, v) {
       $('.hotspot-name').text(v.name);
       document.title = "Welcome to "+v.name;
        $(".cust-logo img").attr("src",folder+"cust-logo.png");
        sessionStorage.vlan_id= vlanId;
        sessionStorage.org_name= v.name;
       });
       }else{
       $(".cust-logo").hide();
       $('.hotspot-name').hide();
       }
      }); 
}else{
       $(".cust-logo").hide();
       $('.hotspot-name').hide();
       }
   $(document).ajaxStart(function(){
	        $("#wait").css("display", "block");
	        $("#wait-logo").css("display", "block");
	    });
   $(document).ajaxComplete(function(){
	        $("#wait").css("display", "none");
	        $("#wait-logo").css("display", "none");
	    });
	    $('#accordion h3').click(function(){$('#accordion input').val("");});
  });
  
  
 
  
  
  
  </script>
	
<meta content="text/html; charset=UTF-8" http-equiv="content-type" />
	
	
	
	
	
	
<link href="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/favicon.ico" rel="Shortcut Icon" />
	<link href="https&#x3a;&#x2f;&#x2f;localhost&#x2f;web&#x2f;hotspot&#x2f;login" rel="canonical" />
	
	
		
	
<link href="&#x2f;html&#x2f;css&#x2f;main&#x2e;css&#x3f;browserId&#x3d;other&#x26;themeId&#x3d;ACTWifiHotspot_WAR_ACTWifiHotspottheme&#x26;minifierType&#x3d;css&#x26;languageId&#x3d;en_US&#x26;b&#x3d;6102&#x26;t&#x3d;1492029716000" rel="stylesheet" type="text/css" />
	
				<link href="https://wifizone.actcorp.in/ACTWiFiRegLogin-portlet/css/flipclock.css?browserId=other&amp;themeId=ACTWifiHotspot_WAR_ACTWifiHotspottheme&amp;minifierType=css&amp;languageId=en_US&amp;b=6102&amp;t=1628053021000" rel="stylesheet" type="text/css" />
	
				<link href="https://wifizone.actcorp.in/ACTWiFiRegLogin-portlet/css/main.css?browserId=other&amp;themeId=ACTWifiHotspot_WAR_ACTWifiHotspottheme&amp;minifierType=css&amp;languageId=en_US&amp;b=6102&amp;t=1628053021000" rel="stylesheet" type="text/css" />
	
<script type="text/javascript">
	// <![CDATA[
		var Liferay = {
			Browser: {
				acceptsGzip: function() {
					return true;
				},
				getMajorVersion: function() {
					return 93.0;
				},
				getRevision: function() {
					return "537.36";
				},
				getVersion: function() {
					return "93.0.4577.82";
				},
				isAir: function() {
					return false;
				},
				isChrome: function() {
					return true;
				},
				isFirefox: function() {
					return false;
				},
				isGecko: function() {
					return true;
				},
				isIe: function() {
					return false;
				},
				isIphone: function() {
					return false;
				},
				isLinux: function() {
					return false;
				},
				isMac: function() {
					return false;
				},
				isMobile: function() {
					return false;
				},
				isMozilla: function() {
					return false;
				},
				isOpera: function() {
					return false;
				},
				isRtf: function() {
					return true;
				},
				isSafari: function() {
					return true;
				},
				isSun: function() {
					return false;
				},
				isWap: function() {
					return false;
				},
				isWapXhtml: function() {
					return false;
				},
				isWebKit: function() {
					return true;
				},
				isWindows: function() {
					return true;
				},
				isWml: function() {
					return false;
				}
			},
			Data: {
				isCustomizationView: function() {
					return false;
				},
				notices: [
					null
					
					
				]
			},
			ThemeDisplay: {
				getCDNDynamicResourcesHost: function() {
					return "";
				},
				getCDNBaseURL: function() {
					return "https://wifizone.actcorp.in";
				},
				getCDNHost: function() {
					return "";
				},
				getCompanyId: function() {
					return "10154";
				},
				getCompanyGroupId: function() {
					return "10192";
				},
				getUserId: function() {
					return "10158";
				},
				
				getDoAsUserIdEncoded: function() {
					return "";
				},
				getPlid: function() {
					return "48003";
				},
				
					getLayoutId: function() {
						return "9";
					},
					getLayoutURL: function() {
						return "/web/hotspot/login";
					},
					isPrivateLayout: function() {
						return "false";
					},
					getParentLayoutId: function() {
						return "0";
					},
					isVirtualLayout: function() {
						return false;
					},
				
				getScopeGroupId: function() {
					return "26048";
				},
				getScopeGroupIdOrLiveGroupId: function() {
					return "26048";
				},
				getParentGroupId: function() {
					return "26048";
				},
				isImpersonated: function() {
					return false;
				},
				isSignedIn: function() {
					return false;
				},
				getDefaultLanguageId: function() {
					return "en_US";
				},
				getLanguageId: function() {
					return "en_US";
				},
				isAddSessionIdToURL: function() {
					return false;
				},
				isFreeformLayout: function() {
					return false;
				},
				isStateExclusive: function() {
					return false;
				},
				isStateMaximized: function() {
					return false;
				},
				isStatePopUp: function() {
					return false;
				},
				getPathContext: function() {
					return "";
				},
				getPathImage: function() {
					return "/image";
				},
				getPathJavaScript: function() {
					return "/html/js";
				},
				getPathMain: function() {
					return "/c";
				},
				getPathThemeImages: function() {
					return "https://wifizone.actcorp.in/ACTWifiHotspot-theme/images";
				},
				getPathThemeRoot: function() {
					return "/ACTWifiHotspot-theme";
				},
				getURLControlPanel: function() {
					return "/group/control_panel?doAsGroupId=26048&refererPlid=48003";
				},
				getURLHome: function() {
					return "https\x3a\x2f\x2fwifizone\x2eactcorp\x2ein\x2fweb\x2fguest";
				},
				getSessionId: function() {
					
						
						
							return "";
						
					
				},
				getPortletSetupShowBordersDefault: function() {
					return false;
				}
			},
			PropsValues: {
				NTLM_AUTH_ENABLED: false
			}
		};
		var themeDisplay = Liferay.ThemeDisplay;
		
		Liferay.AUI = {
			getAvailableLangPath: function() {
				return 'available_languages.jsp?browserId=other&themeId=ACTWifiHotspot_WAR_ACTWifiHotspottheme&colorSchemeId=01&minifierType=js&languageId=en_US&b=6102&t=1492029716000';
			},
			getBaseURL: function() {
				return 'https://wifizone.actcorp.in/html/js/aui/';
			},
			getCombine: function() {
				return true;
			},
			getComboPath: function() {
				return '/combo/?browserId=other&minifierType=&languageId=en_US&b=6102&t=1492029716000&p=/html/js&';
			},
			getFilter: function() {
				
					
						return {
							replaceStr: function(match, fragment, string) {
								return fragment + 'm=' + (match.split('/html/js')[1] || '');
							},
							searchExp: '(\\?|&)/([^&]+)'
						};
					
					
					
				
			},
			getJavaScriptRootPath: function() {
				return '/html/js';
			},
			getLangPath: function() {
				return 'aui_lang.jsp?browserId=other&themeId=ACTWifiHotspot_WAR_ACTWifiHotspottheme&colorSchemeId=01&minifierType=js&languageId=en_US&b=6102&t=1492029716000';
			},
			getRootPath: function() {
				return '/html/js/aui/';
			}
		};
		window.YUI_config = {
			base: Liferay.AUI.getBaseURL(),
			comboBase: Liferay.AUI.getComboPath(),
			fetchCSS: true,
			filter: Liferay.AUI.getFilter(),
			root: Liferay.AUI.getRootPath(),
			useBrowserConsole: false
		};
		Liferay.authToken = '7LePFQB5';
		
		Liferay.currentURL = '\x2fweb\x2fhotspot\x2flogin';
		Liferay.currentURLEncoded = '%2Fweb%2Fhotspot%2Flogin';
	// ]]>
</script>
	
		
			
				<script src="/html/js/barebone.jsp?browserId=other&amp;themeId=ACTWifiHotspot_WAR_ACTWifiHotspottheme&amp;colorSchemeId=01&amp;minifierType=js&amp;minifierBundleId=javascript.barebone.files&amp;languageId=en_US&amp;b=6102&amp;t=1492029716000" type="text/javascript"></script>
			
			
		
	
	
<script type="text/javascript">
	// <![CDATA[
		
			
			
				Liferay.Portlet.list = ['ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet'];
			
		
		
		
	// ]]>
</script>
	
<link class="lfr-css-file" href="https&#x3a;&#x2f;&#x2f;wifizone&#x2e;actcorp&#x2e;in&#x2f;ACTWifiHotspot-theme&#x2f;css&#x2f;main&#x2e;css&#x3f;browserId&#x3d;other&#x26;themeId&#x3d;ACTWifiHotspot_WAR_ACTWifiHotspottheme&#x26;minifierType&#x3d;css&#x26;languageId&#x3d;en_US&#x26;b&#x3d;6102&#x26;t&#x3d;1631696735000" rel="stylesheet" type="text/css" />
	<style type="text/css">
		
			
		
	</style>
</head>
<body class=" yui3-skin-sam controls-visible signed-out public-page site" id="chnlocation">
<div class="container logo-container">
<!-- header id="banner" role="banner">
		<div id="heading">
			<h1 class="site-title">
			        <div class="cust-logo">
			        <img src=""/>
			       </div>
			        
					<p class="hotspot-name"></p>
					<div class="my-logo">
					<img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/logo.png" class="logo" id="logo9" />					
			        </div>
					<p class="site-name" id="welcomeMsg" style="font-size:14px;font-family:'arial narrow'"></p>
					
					 
			</h1>
		</div>
	</header-->
	  
	    <div class="left-logo-block" id="L1">
        <div><a class="logo" href="/web/hotspot/home"><img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/telengana-logo.png" alt="" title="" id="main_logo"></a></div>
        <p id="tag">Initiative by Government of Telangana</p>
      </div>
       
	  
	  <div class="right-logo-block" id="L2">
        <ul>
	  <li><img src="/ACTWifiHotspot-theme/images/forum1.jpg" alt="" title="" id="f1" width="84" height="74" style="display:none"></li>
          <li><img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/hyfi-logo.jpg" alt="" title="" id="hyfi-logo"></li>
          
        </ul>
      </div>
     <div class="right-logo-block" id="L3">
        <ul>
	  <li><img src="/ACTWifiHotspot-theme/images/forum1.jpg" alt="" title="" id="f1" width="84" height="74" style="display:none"></li>
          
          <li><img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/act-logo.png" alt="" title="" id="act-logo"></li>
        </ul>
      </div>
	  
    </div>
     
     <!-- Welcome message -->
     <div id="divmarque" class="container"><marquee style="font-weight:400; font-family:Roboto; color:#e72b39; font-size: 17px;">All ACT Hyderabad Customers will have privilege to use FREE Unlimited WI FI services with Home like speeds from all Hot Spots.</marquee>
	 </div>
     <!-- End Welcome message -->
    <div class="container-fluid padding0 top-band desk">
      <div class="grey-block" id="wifi_msg">Find a hotspot at the ACT free HY-FI at Hyderabad, India's largest Public Wi-Fi Network</div>
      <div class="red-block">
        <ul>
          <li><a href="/web/wifi/home">Home</a></li>
          <li><a href="/web/hotspot/faqs">FAQs</a></li>
        </ul>
      </div>
    </div>
    <div class="container-fluid padding0 mob">
      <div class="top-band-mob">
        <div class="grey-block"></div>
        <div class="red-block">
          <ul>
            <li><a href="/web/hotspot/home" id="lnk1">Home</a></li>
            <li><a href="/web/hotspot/faqs" id="lnk2">FAQs</a></li>
          </ul>
        </div>
      </div>
      
      <div class="top-band-mob-copy" id="wifi_msg_mob">Find a hotspot at the ACT free HY-FI at Hyderabad, India's largest Public Wi-Fi Network</div>
    </div>
    <div class="container-fluid padding0">
      <img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/hotspot-spot.jpg" alt="" title="" class="desk img-responsive" id="ban1">
      <img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/hotspot-spot-mob-hyd.png" alt="" title="" class="mob img-responsive" id="ban1-mb">
    </div>
        
        			
	
		
	
	<div class="portlet-boundary portlet-boundary_103_  portlet-static portlet-static-end portlet-borderless  " id="p_p_id_103_" >
		<span id="p_103"></span>
		<div class="portlet-body">
	
	
	
	
		
	
			
		</div>
	</div>
	
	<div class="columns-1" id="main-content" role="main">
		<div class="portlet-layout">
			<div class="portlet-column portlet-column-only" id="column-1">
				<div class="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
	
		
	
	<div class="portlet-boundary portlet-boundary_ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet_  portlet-static portlet-static-end portlet-borderless ACTWiFiOTPLogin-portlet " id="p_p_id_ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet_" >
		<span id="p_ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet"></span>
		<div class="portlet-body">
	
	
	
	
		
			
				
					
						
					
	
	
	
	
	
		
		
			
			
				
				<div class="portlet-borderless-container" style="">
					
					
	<div class="portlet-body">
	
		
			
			
				
					
	
				
				
					
					
						
	
		
    
<link rel="stylesheet" href="/ACTWifiHotspot-theme/css/main1.css"/>
  
<link rel="stylesheet" href="/ACTWifiHotspot-theme/css/timer-style.css"/>
<link rel="stylesheet" href="/ACTWifiHotspot-theme/css/bootstrap.min.css"/>
    
	
	
	
<div class="container-fluid padding0 userBlock">
      <div class="container">
        <ul id="userTab" class="nav nav-tabs">
          <li class="active"><a href="#login" data-toggle="tab">Login</a></li>
        </ul>
        <div id="myTabContent" class="tab-content login-form" >
            <div class="tab-pane fade in active" id="existing">
                       
						
						<div id="ExistingUserLoginDiv">
						
						<form id="otp-form" class="loginotpform">
								
							
							<ul>
							<br><br>
							<li><input type="tel" autocomplete="off" maxlength="4"  id="otp"
								placeholder="Enter OTP">
							<br><br><button type="submit" id="otp-submit" class="loginbtn">Submit</button></li>
							</ul>
							</form>
						<form id="resendotp" class="loginotpform" style="display:none">
						<input type="hidden"
				class="form-control" placeholder="Mobile" id="mobileResend" name="mobile"
				maxlength="10" autocomplete="off" readonly="readonly">
						<button type="submit" class="btn btn-primary" id="resend-otp" disabled="true" style="margin: 15px 0px;display:none">Resend OTP</button>
						</form>
					</div>	
						
         </div>
      </div>
    </div>
</div>
						
						<script>
						if((typeof(sessionStorage.datalist) == "undefined")||("true".includes("true"))){
							//alert("suamn to redirect");
						window.location.href="/web/a/redirection";
							}
						else{
						$(document).ready(function(){ 
							//alert("suman:"+typeof(sessionStorage.datalist));
							//alert("suman to ttt"+sessionStorage.is_loaded);
							setTimeout(function() { $('#resend-otp').removeAttr('disabled'); },10000); 
							
							if(typeof(sessionStorage.datalist) != "undefined"){
								if(sessionStorage.is_loaded != "true"){
							var userDetails = JSON.parse(sessionStorage.datalist);
							var mobile=userDetails.mobile;
							//alert("mobile1:"+mobile);
							//console.log("mobile11:"+mobile);
							
							if (mobile==null){
								window.location.href="/web/a/redirection";
								}
							$("#mobile").val(mobile);
							$("#mobileResend").val(mobile);
							$("#otp-form").submit(function(e){
								e.preventDefault();
								var otp = $("#otp").val();
								var numPattern = /^\d+$/;
								var noPatternforDigit = new RegExp("^[0-9]+$");
								var msg = "";
								if(otp == "" || otp == null){
									msg = "Please mention OTP";
								}else if(isNaN(otp)){
									msg = "Please enter only Numeric Data";
								}else if(otp.length != 4){
									msg = "OTP number should be 4 digits";
								}else if(!(otp.charAt(0).match(numPattern))||(null==otp.match(noPatternforDigit))){
									msg = "Please enter valid OTP number";
								}
								
								if(msg != ""){
									BootstrapDialog.show({
							     		type: BootstrapDialog.TYPE_DANGER,
							     		title: "Error",
							     		closable: true,
							     		message: msg,
							     		buttons: [{
							                 label: 'OK',
							                 action: function(dialog){
							                     dialog.close();                    
							                      
							                 }
							             }]		
							     	});
									
									}else{
								
								$.ajax({
								   url      : "https://wifizone.actcorp.in/web/hotspot/login?p_auth=7LePFQB5&p_p_id=ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet_javax.portlet.action=otpValidationActionCHN",
							       type     : 'POST',  
							       dataType : 'json',        
							       data     : { 
							      	        otp : otp,
							      	      	mobile : mobile,
							      	        userIP : "10.139.183.143",
							      	        vlanId: "2216:2291",
							      	        locationByIP :"hyd"  	        
										},
										success : function(data, textStatus, jqXHR) {
											var a = $.parseJSON(jqXHR.responseText);
											if((a.message).includes("successfully")){
												if(("3834:101".includes(a.vlan))||("3834:102".includes(a.vlan))||("3834:103".includes(a.vlan))||("3834:104".includes(a.vlan))||("3834:105".includes(a.vlan))||("3834:106".includes(a.vlan))||("3834:107".includes(a.vlan))||("3834:108".includes(a.vlan))||("3834:109".includes(a.vlan))||("3834:110".includes(a.vlan))||("3834:111".includes(a.vlan))||("3834:112".includes(a.vlan))||("3834:113".includes(a.vlan))||("3834:114".includes(a.vlan))||("3834:115".includes(a.vlan))||("3834:116".includes(a.vlan))||("3834:117".includes(a.vlan))||("3834:118".includes(a.vlan))||("3834:119".includes(a.vlan))||("3834:120".includes(a.vlan))||("3835:101".includes(a.vlan))||("3835:102".includes(a.vlan))||("3835:103".includes(a.vlan))||("3835:104".includes(a.vlan))||("3835:105".includes(a.vlan))||("3835:106".includes(a.vlan))||("3835:107".includes(a.vlan))||("3835:108".includes(a.vlan))||("3835:109".includes(a.vlan))||("3835:110".includes(a.vlan))||("3835:111".includes(a.vlan))||("3835:112".includes(a.vlan))||("3835:113".includes(a.vlan))||("3835:114".includes(a.vlan))||("3835:115".includes(a.vlan))||("3835:116".includes(a.vlan))||("3835:117".includes(a.vlan))||("3835:118".includes(a.vlan))||("3835:119".includes(a.vlan))||("3835:120".includes(a.vlan))){													
													//window.location.href="https://www.google.co.in/";
													window.location.href="/web/a/redirection";
													}
												else{
												window.location.href="/web/a/redirection";
												}
											}else if((a.message).includes("noshow")){
												sessionStorage.setItem('datalist', JSON.stringify(a));
												sessionStorage.removeItem("is_loaded");
										        window.location.href="/web/hotspot/packages";
												}
											else if((a.message).includes("completed")){
												sessionStorage.setItem('datalist', JSON.stringify(a));
												sessionStorage.removeItem("is_loaded");
												BootstrapDialog.show({
										     		type: BootstrapDialog.TYPE_INFO,
										     		title: "Notification",
										     		closable: false,
										     		message: a.message,
										     		buttons: [{
										                 label: 'OK',
										                 action: function(dialog){
										                     dialog.close();
										           	         window.location.href="/web/hotspot/packages";
										                 }
										             }]		
										     	});
												}else{
												BootstrapDialog.show({
										     		type: BootstrapDialog.TYPE_DANGER,
										     		title: "Error",
										     		closable: false,
										     		message: a.message,
										     		buttons: [{
										                 label: 'OK',
										                 action: function(dialog){
										                     dialog.close();
										                     //window.location.href="/web/a/redirection";
										                 }
										             }]		
										     	});
												}
										}
								});
								
								}
							});
								$("#resendotp").submit(function(e){
								var msg = "";
								if(msg != ""){
									BootstrapDialog.show({
							     		type: BootstrapDialog.TYPE_DANGER,
							     		title: "Error",
							     		closable: true,
							     		message: msg,
							     		buttons: [{
							                 label: 'OK',
							                 action: function(dialog){
							                     dialog.close();                    
							                      
							                 }
							             }]		
							     	});
									
									}else{
								$.ajax({
								   url      : "https://wifizone.actcorp.in/web/hotspot/login?p_auth=7LePFQB5&p_p_id=ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet_javax.portlet.action=resendOTPAction",
							       type     : 'POST',  
							       dataType : 'json',        
							       data     : { 
							      	      	mobile : mobile,
										},
										success : function(data, textStatus, jqXHR) {
												var a = $.parseJSON(jqXHR.responseText);
												var msgType,msgTitle,close;
						
						
						if((a.message).includes("SMS")){
							msgType = BootstrapDialog.TYPE_SUCCESS;
		            		msgTitle = "Success";
		            		//debugger;
							//$(this).attr('disabled','disabled');
							//setTimeout(function() { $('#resend-otp').attr('disabled','disabled'); },8000);   // enable after 2 seconds
							close = false;
			            	}
						else {		            		
		            		msgType = BootstrapDialog.TYPE_DANGER;
		            		msgTitle = "Error";
		            		close = true;	
							
		            	}
						BootstrapDialog.show({
				     		type: msgType,
				     		title: msgTitle,
				     		closable: close,
				     		message: a.message,
				     		buttons: [{
				                 label: 'OK',
				                 action: function(dialog){
				                     dialog.close();
				                     if((msgTitle).includes("Success"))
					                     {
				                        window.location.href="/web/hotspot/login";        
					                     }
				                     else{
				                    	 window.location.href;       
					                     } 		
				                 }
				             }]		
				     	});
										}
								});}});
							
								}}
						//	else{
								//alert("suman redirect to home page");
			               //      window.location.href="/web/a/redirection";
									
							//	}
							});}
						
						</script>
						
						
	
	
					
				
			
			
		
	
	
	</div>
				</div>
				
			
		
	
				
				
			
		
	
			
		</div>
	</div>
	
	
</div>
			</div>
		</div>
	</div>
	
<form action="#" id="hrefFm" method="post" name="hrefFm">
	<span></span>
</form>
		
    
    <div class="container-fluid padding0 footer-home">
      <div class="feature-container">
        <div class="darkgrey-bg">
          <div class="feature-left">
            <div>
              <img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/find-hotspot-icon.png" alt="" title="">
            </div>
            <div>
              <h3>Find a hotspot</h3>
              <p>Stay connected to India's largest fiber broadband with over 3000 + hotspot locations</p>
            </div>
          </div>
        </div>
          
        <div class="lightgrey-bg">
          <div class="feature-right">
            <div>
              <img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/easy-access.png" alt="" title="">
            </div>
            <div>
              <h3>Get easy access </h3>
              <p>Get FREE access to public Wifi at all the ACT Wifi zones</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
     
    <div class="container packages-home">
      <div class="pack-details">
        <h3>Buy amazing Wifi packages</h3>
        <ul>
          <li>
            <span><img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/cart.png" alt="" title=""></span>
            <p>Enjoy <span>25Mbps</span> speed with <span>200MB</span> of data limit <span>@ Rs.25  </span>for <span>  <br>1 hour</span></p>
          </li>
          
          <li>
            <span><img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/cart.png" alt="" title=""></span>
            <p>Enjoy <span>25Mbps</span> speed with <span>500MB</span> of data limit <span>@ Rs.50 </span>for <span>   <br>3 hours</span></p>
 </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid padding0 footer-home">
      <div class="hotspot-footer">
        <h4>Seamless internet experience</h4>
        <p>Login to India's largest fiber broadband network and experience a seamless internet connection with superfast speeds on the go! </p>
      </div>
    </div>
	
	
				<script src="https://wifizone.actcorp.in/ACTWiFiRegLogin-portlet/js/flipclock.min.js?browserId=other&amp;minifierType=js&amp;languageId=en_US&amp;b=6102&amp;t=1628053021000" type="text/javascript"></script>
	
				<script src="https://wifizone.actcorp.in/ACTWiFiRegLogin-portlet/js/main.js?browserId=other&amp;minifierType=js&amp;languageId=en_US&amp;b=6102&amp;t=1628053021000" type="text/javascript"></script>
	
	
	
	
	
	
	
	
	
	
	
<script type="text/javascript">
// <![CDATA[
	Liferay.Util.addInputFocus();
	
		Liferay.Portlet.runtimePortletIds = ['103'];
	
	
	
		
		
			
			
		
	
// ]]>
</script>
<script type="text/javascript">
// <![CDATA[
				Liferay.Portlet.onLoad(
					{
						canEditTitle: false,
						columnPos: 0,
						isStatic: 'end',
						namespacedId: 'p_p_id_ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet_',
						portletId: 'ACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet',
						refreshURL: '\x2fc\x2fportal\x2frender_portlet\x3fp_l_id\x3d48003\x26p_p_id\x3dACTWiFiOTPLogin_WAR_ACTWiFiRegLoginportlet\x26p_p_lifecycle\x3d0\x26p_t_lifecycle\x3d0\x26p_p_state\x3dnormal\x26p_p_mode\x3dview\x26p_p_col_id\x3dcolumn-1\x26p_p_col_pos\x3d0\x26p_p_col_count\x3d1\x26p_p_isolated\x3d1\x26currentURL\x3d\x252Fweb\x252Fhotspot\x252Flogin'
					}
				);
			
				Liferay.Portlet.onLoad(
					{
						canEditTitle: false,
						columnPos: 0,
						isStatic: 'end',
						namespacedId: 'p_p_id_103_',
						portletId: '103',
						refreshURL: '\x2fc\x2fportal\x2frender_portlet\x3fp_l_id\x3d48003\x26p_p_id\x3d103\x26p_p_lifecycle\x3d0\x26p_t_lifecycle\x3d0\x26p_p_state\x3dnormal\x26p_p_mode\x3dview\x26p_p_col_id\x3d\x26p_p_col_pos\x3d0\x26p_p_col_count\x3d0\x26p_p_isolated\x3d1\x26currentURL\x3d\x252Fweb\x252Fhotspot\x252Flogin'
					}
				);
			AUI().use('aui-base', 'liferay-menu', 'liferay-notice', 'liferay-poller', function(A) {(function() {
	Liferay.Util.addInputType();
	Liferay.Portlet.ready(
		function(portletId, node) {
			Liferay.Util.addInputType(node);
		}
	);
})();(function() {
	new Liferay.Menu();
	var liferayNotices = Liferay.Data.notices;
	for (var i = 1; i < liferayNotices.length; i++) {
		new Liferay.Notice(liferayNotices[i]);
	}
	
})();});
// ]]>
</script>
<script src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/js/main.js?browserId=other&amp;minifierType=js&amp;languageId=en_US&amp;b=6102&amp;t=1631696735000" type="text/javascript"></script>
	
	
	<script type="text/javascript">
		// <![CDATA[
			
			
		// ]]>
	</script>
<div id="wait">
</div>
<div id="wait-logo">
<img src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/images/loading.gif" style="width:100%;"/>
</div>
<script>
 $(function() {
   $('input').placeholder();
 });
</script>
  
  <script type="text/javascript" src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/js/bootstrap-tabcollapse.js"></script>
  <script type="text/javascript" src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/js/table-collaps.js"></script>
  
  <script type="text/javascript" src="https://wifizone.actcorp.in/ACTWifiHotspot-theme/js/main1.js"></script>
   <script type="text/javascript">
  //     $('button').on('click', function(){
  //         alert('preserve attached java script data!');
  //     });
  //     $('#myTab').tabCollapse();
	
  </script>
</body>
</html>
