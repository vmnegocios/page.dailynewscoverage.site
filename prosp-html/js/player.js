function vTurbChangePlayer(){!vTurbOriginalPlayerIsMobile&&vTurbDeviceIsMobile||vTurbOriginalPlayerIsMobile&&!vTurbDeviceIsMobile?(vTurbPlayer=vTurbAlternativePlayer,vTurbSrcId=vTurbPlayer.id):vTurbPlayer=vTurbOriginalPlayer;var e=document.getElementById(`vid_${vTurbOriginalPlayer.id}`);e&&e.remove();var t=document.getElementById(`scr_${vTurbOriginalPlayer.id}`);t&&t.setAttribute("id",`scr_${vTurbSrcId}`)}function vTurbCreatSmartvdsElements(){var e,t,r;"1.7.9"===vTurbPlayer.version?document.getElementById(`vid_${vTurbPlayer.id}`)||(window,e=document,t=e.getElementById(`scr_${vTurbSrcId}`),(r=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,t.parentElement.insertBefore(r,t)):(document.getElementById(`vid_${vTurbPlayer.id}`)||function(e,t,r){t=e.getElementById(`scr_${vTurbSrcId}`),(r=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,r.style.position="relative",r.style.width="100%",r.style.padding=`${vTurbPlayer.video_aspect_ratio}% 0 0`,t.parentElement.insertBefore(r,t)}(document),document.getElementById(`thumb_${vTurbPlayer.id}`)||function(e,t,r){t=e.getElementById(`vid_${vTurbPlayer.id}`),(r=e.createElement("IMG")).id=`thumb_${vTurbPlayer.id}`,r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.position="absolute",r.style.objectFit="cover",r.src=`https://images.converteai.net/${vTurbPlayer.thumbnail_key}`,t.appendChild(r)}(document),document.getElementById(`backdrop_${vTurbPlayer.id}`)||function(e,t,r){t=e.getElementById(`vid_${vTurbPlayer.id}`),(r=e.createElement("DIV")).id=`backdrop_${vTurbPlayer.id}`,r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.position="absolute",r.style.backdropFilter="blur(5px)",r.style.webkitBackdropFilter="blur(5px)",t.appendChild(r)}(document))}function vTurbLoadSmrtvds(){var e,t,r,a;e=window,t=document,e.smrtvds||(r=e.smrtvds=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)},e._smrtvds||(e._smrtvds=r),r.push=r,r.loaded=!0,r.version="1.1",r.queue=[],(a=t.createElement("script")).async=!0,a.src=`https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`,t.getElementsByTagName("head")[0].appendChild(a)),window.smrtvds(`vid_${vTurbPlayer.id}`,vTurbPlayer.org_id,vTurbPlayer.video_id,vTurbPlayer.options)}function vTurbSmrtvds(){vTurbCreatSmartvdsElements(),vTurbLoadSmrtvds()}var vTurbOriginalPlayer={"id":"6761d2c14304f33bb0284604","org_id":"ddb9fbe4-f602-4ee1-934b-e69d8b414d78","name":"VSL Certa.mp4","device_type":"mobile","video_aspect_ratio":"177.63157894736844","thumbnail_key":"ddb9fbe4-f602-4ee1-934b-e69d8b414d78/players/6761d2c14304f33bb0284604/thumbnail.jpg","cover_key":"ddb9fbe4-f602-4ee1-934b-e69d8b414d78/players/6761d2c14304f33bb0284604/cover.jpg","version":"v1","video_id":"6761d23418989a2e9728bbb7","options":{"autoplay":"smartplay","subtitle_active":!1,"smart_autoplay_template":"image","theme":"#cc3333","foreground_color":"#FFFFFF","video":{"width":608,"height":1080},"cdn":"cdn.converteai.net","conversion_params":["src"],"displays":{"big_play":!1,"play_pause":!0,"backward":!1,"subtitle_control":!1,"forward":!1,"volume":!1,"volume_bar":!0,"time":!1,"fullscreen":!1,"seekbar":!1,"seekbar_time":!0,"speed_control":!1},"callAction":[{"id":"callaction_6761d2c14304f33bb0284604_0","type":"below_button","btnText":"RECIBIR LAS FRECUENCIAS","position":"bc","link":"https://pay.hotmart.com/I95308851W?off=j8hd6gwh&checkoutMode=10","range":{"start":1515,"finish":1856},"color":"#32CD32","show_visit_returns":!1,"colors":{"text":"#FFFFFF","background":"#32CD32","text_hover":"#ffffff","background_hover":"#32CD32"},"size":"md"}],"pixels":[],"thumbs":[],"headlines":[],"smart_autoplays":[{"id":"smart_autoplay_6761d2c14304f33bb0284604_1","name":"Smart Autoplay 1","version":"2","number":1,"template":"image","background_color":"rgba(8, 93, 138, 0.78)","bottom_text":"Clique para ouvir","foreground_color":"#FFFFFF","top_text":"Seu v\xeddeo j\xe1 come\xe7ou","animation":{},"video_start_at":0,"video_end_at":10,"cover_key":"ddb9fbe4-f602-4ee1-934b-e69d8b414d78/players/6761d2c14304f33bb0284604/smart_autoplay_6761d2c14304f33bb0284604_1_cover.jpg","thumbnail_key":"ddb9fbe4-f602-4ee1-934b-e69d8b414d78/players/6761d2c14304f33bb0284604/smart_autoplay_6761d2c14304f33bb0284604_1_thumbnail.jpg","elements":[{"id":"smart_autoplay_6761d2c14304f33bb0284604_1_element_0","height":218.88,"width":273.6,"x":167.19993312002674,"y":430.5602180051737,"order":1,"opacity":.79,"rotation":0,"type":"image","properties":{"alt":"Smart AutoPlay","src":"https://cdn.converteai.net/ddb9fbe4-f602-4ee1-934b-e69d8b414d78/2024/07/19/669aaf02be77030001cbe8fc.gif"}}],"custom_player_preview":null}],"turbos":[{"active":!0,"speed":1,"weight":100},{"active":!0,"speed":1.1,"weight":100},{"active":!0,"speed":1.2,"weight":100},{"active":!0,"speed":1.3,"weight":100},{"active":!0,"speed":1.4,"weight":100}],"smart_autoplay_elements":[{"id":"smart_autoplay_element_6761d2c14304f33bb0284604_0","height":218.88,"width":273.6,"x":167.19993312002674,"y":430.5602180051737,"order":1,"opacity":.79,"rotation":0,"type":"image","properties":{"alt":"Smart AutoPlay","src":"https://cdn.converteai.net/ddb9fbe4-f602-4ee1-934b-e69d8b414d78/2024/07/19/669aaf02be77030001cbe8fc.gif"}}],"mini_hooks":!1,"mini_hooks_elements":[],"resume":!0,"fake_bar":!0,"headline":!1,"turbo":!0,"turbo_speed":1,"turbo_auto_test":!0,"smartplay_options":{"top_text":"Seu v\xeddeo j\xe1 come\xe7ou","bottom_text":"Clique para ouvir","foreground_color":"#FFFFFF","background_color":"rgba(8, 93, 138, 0.78)","start_at":0,"end_at":10,"animation":{},"custom_preview":null},"resume_options":{"play":"\xbfContinuar viendo?","title":"Ya comenzaste a ver este video","replay":"\xbfVer desde el principio?","disable_pause":!1,"foreground_color":"#FFFFFF","background_color":"#151615"},"fake_bar_options":{"height":10,"alpha":2,"vbar_height":!0,"vbar_end":!0,"vbar_network":!0,"vbar_color":"#FF4D4D"}}},vTurbSrcId="6761d2c14304f33bb0284604",vTurbPlayer=vTurbOriginalPlayer,vTurbDeviceIsMobile=window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),vTurbOriginalPlayerIsMobile="mobile"===vTurbOriginalPlayer.device_type;vTurbDeviceIsMobile=vTurbDeviceIsMobile&&vTurbDeviceIsMobile[0],vTurbSmrtvds();