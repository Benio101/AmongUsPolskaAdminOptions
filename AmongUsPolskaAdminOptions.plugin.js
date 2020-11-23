/**
 * @name AmongUsPolskaAdminOptions
 * @version 0.0.1
 * @description Dodatkowe opcje dla Administracji serwera Among Us Polska.
 * @updateUrl https://raw.githubusercontent.com/Benio101/AmongUsPolskaAdminOptions/main/AmongUsPolskaAdminOptions.plugin.js
 * @author Benio
 */

module.exports = (_ => {
	const config = {
		"info": {
			"name": "AmongUsPolskaAdminOptions",
			"author": "Benio",
			"version": "0",
			"description": "Dodatkowe opcje dla Administracji serwera Among Us Polska."
		}
	};

	return !window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started) ? class {
		getName () {return config.info.name;}
		getAuthor () {return config.info.author;}
		getVersion () {return config.info.version;}
		getDescription () {return config.info.description;}
		
		load() {
			if (!window.BDFDB_Global || !Array.isArray(window.BDFDB_Global.pluginQueue)) window.BDFDB_Global = Object.assign({}, window.BDFDB_Global, {pluginQueue:[]});
			if (!window.BDFDB_Global.downloadModal) {
				window.BDFDB_Global.downloadModal = true;
				BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click "Download Now" to install it.`, {
					confirmText: "Download Now",
					cancelText: "Cancel",
					onCancel: _ => {delete window.BDFDB_Global.downloadModal;},
					onConfirm: _ => {
						delete window.BDFDB_Global.downloadModal;
						require("request").get("https://mwittrien.github.io/BetterDiscordAddons/Library/0BDFDB.plugin.js", (e, r, b) => {
							if (!e && b && b.indexOf(`* @name BDFDB`) > -1) require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0BDFDB.plugin.js"), b, _ => {});
							else BdApi.alert("Error", "Could not download BDFDB library plugin, try again some time later.");
						});
					}
				});
			}
			if (!window.BDFDB_Global.pluginQueue.includes(config.info.name)) window.BDFDB_Global.pluginQueue.push(config.info.name);
		}
		start(){this.load();}
		stop(){}
	} : (([Plugin, BDFDB]) => {
		return class QuickMention extends Plugin {
			onLoad(){
				console.log(BDFDB.LibraryComponents.SvgIcon.Names);
			}
			onStart(){}
			onStop(){}
			onMessageOptionToolbar(e)
			{
				const szukanie_druzyny_id = '755646989173129266';
				const szukanie_druzyny_18_id = '757173602725396520';
				const chat_ogolny_id = '755646984546811995';
				const pomoc_supportu_id = '755646995863044168';
				const komendy_id = '755646959015952476';

				// Niestosowanie się do wzoru
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								ZeresPluginLibrary.DiscordAPI.currentChannel.id == szukanie_druzyny_id
							||	ZeresPluginLibrary.DiscordAPI.currentChannel.id == szukanie_druzyny_18_id
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer, {
					key: "mention",
					text: "Niestosowanie się do wzoru",
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable, {
						className: BDFDB.disCN.messagetoolbarbutton,
						style: {color: 'rgb(255, 255, 64)'},
						onClick: _ => {
							let delay_time = 0;
							let delay = function(min, max){ return delay_time += 1e3 * (Math.random() * (max - min)); };
							let delay_first_cmd = function(){ return delay(2, 3); };
							let delay_next_cmd = function(){ return delay(6, 9); };

							// delete message
							ZLibrary.DiscordModules.MessageActions.deleteMessage(ZeresPluginLibrary.DiscordAPI.currentChannel.id, e.instance.props.message.id);

							// warn user
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warn ${e.instance.props.message.author.id} Niestosowanie się do wzoru na kanale <#${ZeresPluginLibrary.DiscordAPI.currentChannel.id}>.`}); }, delay_first_cmd());

							// see user warnings
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warnings ${e.instance.props.message.author.id}`}); }, delay_next_cmd());
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon, {
							className: BDFDB.disCN.messagetoolbaricon,
							name: BDFDB.LibraryComponents.SvgIcon.Names.CHECKBOX_EMPTY
						})
					})
				}));

				// Wiadomość niezwiązana z szukaniem drużyny
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								ZeresPluginLibrary.DiscordAPI.currentChannel.id == szukanie_druzyny_id
							||	ZeresPluginLibrary.DiscordAPI.currentChannel.id == szukanie_druzyny_18_id
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer, {
					key: "mention",
					text: "Wiadomość niezwiązana z szukaniem drużyny",
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable, {
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ => {
							let delay_time = 0;
							let delay = function(min, max){ return delay_time += 1e3 * (Math.random() * (max - min)); };
							let delay_first_cmd = function(){ return delay(2, 3); };
							let delay_next_cmd = function(){ return delay(6, 9); };

							// delete message
							ZLibrary.DiscordModules.MessageActions.deleteMessage(ZeresPluginLibrary.DiscordAPI.currentChannel.id, e.instance.props.message.id);

							// warn user
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warn ${e.instance.props.message.author.id} Wiadomość niezwiązana z szukaniem drużyny na kanale <#${ZeresPluginLibrary.DiscordAPI.currentChannel.id}>.`}); }, delay_first_cmd());

							// see user warnings
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warnings ${e.instance.props.message.author.id}`}); }, delay_next_cmd());
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon, {
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: `<svg height='24px' width='24px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M85.9,71.7c-0.1-2.1-0.4-4.3-0.7-6.7c-0.4-2.4-0.8-4.6-1.3-6.7c-0.5-2.1-1.3-4.1-2.2-6c-0.9-2-1.9-3.6-3.1-5 c-1.2-1.4-2.6-2.5-4.3-3.3c-1.7-0.8-3.5-1.2-5.5-1.2l0,0h0c0,0,0,0-0.1,0c0,0,0,0,0,0l-0.9,0c4.3-4.5,6.5-9.9,6.5-16.2 c0-6.5-2.3-12-6.9-16.6C62.9,5.3,57.3,3,50.8,3c-6.5,0-12,2.3-16.6,6.9c-4.6,4.6-6.9,10.1-6.9,16.6c0,6.3,2.2,11.7,6.5,16.2l-0.9,0 c0,0,0,0,0,0c0,0,0,0,0,0h-0.1l0,0c-2,0-3.9,0.4-5.5,1.2c-1.7,0.8-3.1,1.9-4.3,3.3c-1.2,1.4-2.2,3-3.1,5c-0.9,2-1.6,4-2.2,6 c-0.5,2.1-1,4.3-1.3,6.7c-0.4,2.4-0.6,4.7-0.7,6.7c-0.1,2.1-0.2,4.2-0.2,6.4c0,4.9,1.2,8.8,3.7,11.7c2.4,2.9,5.7,4.3,9.7,4.3h43.8 c4,0,7.3-1.4,9.7-4.3c2.4-2.9,3.7-6.8,3.7-11.7C86.1,75.9,86.1,73.8,85.9,71.7z M66.5,76.3c0.5,0.5,0.7,1.1,0.7,1.8 c0,0.7-0.2,1.3-0.7,1.8l-3.5,3.5c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7l-7.6-7.6l-7.6,7.6c-0.5,0.5-1.1,0.7-1.8,0.7 c-0.7,0-1.3-0.2-1.8-0.7l-3.5-3.5c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.7,0.2-1.3,0.7-1.8l7.6-7.6l-7.6-7.6c-0.5-0.5-0.7-1.1-0.7-1.8 c0-0.7,0.2-1.3,0.7-1.8l3.5-3.5c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.8,0.7l7.6,7.6l7.6-7.6c0.5-0.5,1.1-0.7,1.8-0.7 c0.7,0,1.3,0.2,1.8,0.7l3.5,3.5c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8l-7.6,7.6L66.5,76.3z"></path></svg>`
						})
					})
				}));

				// Niestosowna wiadomość
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								ZeresPluginLibrary.DiscordAPI.currentChannel.id == szukanie_druzyny_id
							||	ZeresPluginLibrary.DiscordAPI.currentChannel.id == szukanie_druzyny_18_id
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer, {
					key: "mention",
					text: "Niestosowna wiadomość",
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable, {
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ => {
							let delay_time = 0;
							let delay = function(min, max){ return delay_time += 1e3 * (Math.random() * (max - min)); };
							let delay_first_cmd = function(){ return delay(2, 3); };
							let delay_next_cmd = function(){ return delay(6, 9); };

							// delete message
							ZLibrary.DiscordModules.MessageActions.deleteMessage(ZeresPluginLibrary.DiscordAPI.currentChannel.id, e.instance.props.message.id);

							// warn user
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warn ${e.instance.props.message.author.id} Niestosowna wiadomość na kanale <#${ZeresPluginLibrary.DiscordAPI.currentChannel.id}>.`}); }, delay_first_cmd());

							// see user warnings
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warnings ${e.instance.props.message.author.id}`}); }, delay_next_cmd());
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon, {
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: `<svg height='24px' width='24px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;"><g><path d="M12.5,60.2v-5.9h6.2l1.2-8.1h-5.4v-5.9h6.2l1.8-13h6.4l-1.8,13h6.4l1.8-13h6.4l-1.8,13h4.8v5.9h-5.7l-1.1,8.1h4.8v5.9h-5.7 l-1.8,13h-6.4l1.8-13h-6.3l-1.8,13h-6.4l1.8-13H12.5z M25,54.3h6.4l1.1-8.1h-6.3L25,54.3z"></path><path d="M70.2,31.7l1.8,5l-7.7,2.6l4.8,6.4l-4.3,3.2l-4.8-6.7l-4.6,6.7l-4.4-3.2l4.9-6.4l-7.6-2.6l1.8-5l7.4,2.9v-8.2h5.2v8.2 L70.2,31.7z"></path><path d="M87.7,63.1v10.1H77.4V63.1H87.7z M84.8,59.1h-4.7L77.7,39V26.4h9.7V39L84.8,59.1z"></path></g></svg>`
						})
					})
				}));

				// Szukanie drużyny
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								ZeresPluginLibrary.DiscordAPI.currentChannel.id == chat_ogolny_id
							||	ZeresPluginLibrary.DiscordAPI.currentChannel.id == pomoc_supportu_id
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer, {
					key: "mention",
					text: "Szukanie drużyny",
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable, {
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ => {
							let delay_time = 0;
							let delay = function(min, max){ return delay_time += 1e3 * (Math.random() * (max - min)); };
							let delay_first_cmd = function(){ return delay(2, 3); };
							let delay_next_cmd = function(){ return delay(6, 9); };

							// delete message
							ZLibrary.DiscordModules.MessageActions.deleteMessage(ZeresPluginLibrary.DiscordAPI.currentChannel.id, e.instance.props.message.id);

							// warn user
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warn ${e.instance.props.message.author.id} Szukanie drużyny kanale <#${ZeresPluginLibrary.DiscordAPI.currentChannel.id}>.`}); }, delay_first_cmd());

							// see user warnings
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warnings ${e.instance.props.message.author.id}`}); }, delay_next_cmd());
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon, {
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: `<svg height='24px' width='24px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;"><g><path d="M83.9,77.4c-2.4-13-13.7-22.5-26.9-22.5H43.3c-13.5,0-24.9,9.8-27.1,23.1v0c-1.1,6.7,4.1,12.7,10.8,12.7h46.2 c6.8,0,12-6.2,10.8-12.9L83.9,77.4z"></path><path d="M36.1,44.2c7.8,7.8,20.4,8,28.4,0.4l0.2-0.2c6.9-6.6,7.6-17.3,1.5-24.7l0,0c-8.3-10-23.7-9.8-31.7,0.4l0,0 c-5.6,7.2-5,17.5,1.5,24L36.1,44.2z"></path></g></svg>`
						})
					})
				}));

				// Spam
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								ZeresPluginLibrary.DiscordAPI.currentChannel.id == chat_ogolny_id
							||	ZeresPluginLibrary.DiscordAPI.currentChannel.id == pomoc_supportu_id
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer, {
					key: "mention",
					text: "Spam",
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable, {
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ => {
							let delay_time = 0;
							let delay = function(min, max){ return delay_time += 1e3 * (Math.random() * (max - min)); };
							let delay_first_cmd = function(){ return delay(2, 3); };
							let delay_next_cmd = function(){ return delay(6, 9); };

							// delete message
							ZLibrary.DiscordModules.MessageActions.deleteMessage(ZeresPluginLibrary.DiscordAPI.currentChannel.id, e.instance.props.message.id);

							// warn user
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warn ${e.instance.props.message.author.id} Spam kanale <#${ZeresPluginLibrary.DiscordAPI.currentChannel.id}>.`}); }, delay_first_cmd());

							// see user warnings
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warnings ${e.instance.props.message.author.id}`}); }, delay_next_cmd());
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon, {
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: `<svg height='24px' width='24px' fill="#FFFF40" viewBox="0 0 25 25" x="0px" y="0px"><title>Spam</title><g data-name="Icon 1"><path d="M4.5,8h.5321L5.94,21.6558a1.5016,1.5016,0,0,0,1.496,1.4013h10.129a1.5015,1.5015,0,0,0,1.496-1.4L19.9679,8H20.5a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5H4.5a.5.5,0,0,0-.5.5v2A.5.5,0,0,0,4.5,8Zm11.42,9.2129-.707.707L12.5,15.207,9.7871,17.92l-.707-.707L11.793,14.5,9.08,11.7871l.707-.707L12.5,13.793,15.2129,11.08l.707.707L13.207,14.5Z"></path><path d="M10,3h5V4h1V2.5a.5.5,0,0,0-.5-.5h-6a.5.5,0,0,0-.5.5V4h1Z"></path></g></svg>`
						})
					})
				}));

				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	ZeresPluginLibrary.DiscordAPI.currentChannel.id == pomoc_supportu_id
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer, {
					key: "mention",
					text: "Bezsensowna wiadomość",
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable, {
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ => {
							let delay_time = 0;
							let delay = function(min, max){ return delay_time += 1e3 * (Math.random() * (max - min)); };
							let delay_first_cmd = function(){ return delay(0, 1); };
							let delay_next_cmd = function(){ return delay(3, 5); };

							// delete message
							ZLibrary.DiscordModules.MessageActions.deleteMessage(ZeresPluginLibrary.DiscordAPI.currentChannel.id, e.instance.props.message.id);

							// warn user
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warn ${e.instance.props.message.author.id} Bezsensowna wiadomość na kanale <#${ZeresPluginLibrary.DiscordAPI.currentChannel.id}>.`}); }, delay_first_cmd());

							// see user warnings
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warnings ${e.instance.props.message.author.id}`}); }, delay_next_cmd());
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon, {
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: `<svg height='300px' width='300px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M15.4,12c-0.1,3.2-0.4,6-0.4,8.7c0,4.8,0.2,9.5,0.3,14.3c0.1,6.2,0.1,12.5,0,18.7c-0.1,2.7,0,5.3,0.1,8 c0.1,2.7-0.1,5.5-0.2,8.2c-0.2,4.1-0.4,8.2-0.6,12.2c0,1-0.1,2.1-0.1,3.1c0,0.9,0.3,1.4,1.3,1.5c3.3,0.3,6.5,0.8,9.8,0.1 c0.5-0.1,1-0.1,1.6-0.2c3.6-0.1,7.3-0.2,10.9-0.4c1.6-0.1,3.2-0.6,4.8-0.7c1.6-0.1,3.3,0,4.9,0.1c0.7,0,1.5,0.1,2.2,0.1 c3.9,0,7.9-0.2,11.8,0c4.5,0.2,9,0.7,13.6,1.1c0.9,0.1,1.8,0.3,2.7,0.3c3.9,0.1,7.5,1.2,11,2.7c0.5,0.2,1.1,0.5,1.5,0.9 c0.8,0.7,1,1.6,0.8,2.6c-0.2,1.1-1.1,1.4-2,1.4c-1.3,0.1-2.7,0.2-4,0c-6.3-0.6-12.6-1.4-18.9-1.9c-3.8-0.3-7.7-0.2-11.6-0.2 c-1.5,0-3,0.2-4.5,0.1c-5.5-0.3-11,0.7-16.4,1.2c-0.3,0-0.6,0.1-0.9,0.1c-5.3-0.1-10.6-0.2-15.8-0.3c-2.1-0.1-4.3-0.3-6.4-0.5 c-1.1-0.1-2.1-0.4-2.8-0.6c0-3.8,0-7.2,0-10.6c0-2.3,0.2-4.6,0.3-6.9c0.1-2.9,0.2-5.8,0.3-8.7c0-0.1,0-0.1,0-0.2 C8.4,59.4,8.1,52.3,8,45.3c-0.1-4.7,0.2-9.4,0.2-14c0-2.4-0.2-4.7-0.2-7.1c0-2.5,0.2-4.9,0.3-7.4c0.1-2.3,0.1-4.6,0.1-6.9 c0-1.9,0.3-2.2,2.2-2.1c1.2,0.1,2.3,0.3,3.5,0.4c3.4,0.3,6.6-1,9.8-1.7c3.6-0.9,7.2-1.4,11-1.4c8.7-0.1,17.2,1.2,25.8,1.4 c3.3,0.1,6.5,0,9.8,0.1c3.6,0.1,7.1,0.5,10.7,0.6c1.2,0.1,2.4,0,3.6-0.1c1.9-0.1,3.6-0.2,5.5,0.5c1.2,0.4,1.5,0.9,1.4,2.1 c0,0.7,0.2,1.5,0.3,2.2c0.1,0.9,0.1,1.8,0,2.6c-0.2,1.9-0.5,3.8-0.7,5.7c-0.4,6,0,12,0.2,18c0.1,6,0,12,0.1,18.1 c0,3.9,0.2,7.7,0.2,11.6c0,1.8-0.5,3.5-0.8,5.3c-0.1,0.3-0.3,0.7-0.6,0.8c-1.6,0.7-3.4,1.5-4.9,0.8c-3.1-1.3-6.3-1.1-9.4-1 c-4.7,0.1-9.5,0.7-14.2,0.8c-3,0.1-6.1-0.3-9.1-0.3c-4.1,0-8.2,0.3-12.3,0.3c-2.2,0-4.4-0.1-6.7-0.2c-1.3-0.1-2-0.9-2.3-2.2 c-0.1-0.6-0.4-1.1-0.5-1.7c-0.1-0.6-0.4-1.4-0.3-1.9c0.7-2.1,0.2-4.3,0.2-6.4c0-3,0.1-6.1,0.1-9.1c0.1-3.6,0.4-7.1,0.4-10.7 c0-3.8,0-7.6-0.3-11.3c-0.3-2.8,1.3-4.6,2.4-6.7c0.2-0.3,0.7-0.5,1.1-0.5c3.5,0,7,0.1,10.4,0.2c4.9,0.1,9.8,0.2,14.7,0.4 c3,0.1,5.9,0.6,8.9,0.8c2.5,0.2,3.5,2,3.9,3.8c0.8,3.1,1.3,6.2,0.1,9.4c-0.6,1.8-0.9,3.7-1.4,5.6c-0.1,0.4-0.1,0.9,0,1.3 c0.8,3.1-0.2,6.2-0.1,9.3c0,2.7-0.8,3.4-3.5,3.5c-4.5,0.2-9.1,0.4-13.6,0.5c-1.3,0-2.7-0.3-4-0.5c-0.8-0.2-1.3-0.8-1.7-1.6 c-0.9-1.9-1.1-3.9-1.1-5.9c0-2.5,0.1-5.1,0.4-7.6c0.2-1.9,2.6-3.7,4.4-3.1c1.6,0.5,3.1,0.2,4.5-0.3c0.3-0.1,0.6-0.2,0.9-0.2 c1.5-0.2,2.4,0.7,1.8,2.1c-0.7,1.7-1.3,2.9-3.6,2.7c-1-0.1-2,0.1-3,0.2c-1.2,2.7,0.5,5,0.3,7.3c4.3,0.5,8.5,1,13,1.6 c0-1.3,0.1-2.5,0-3.7c-0.4-3.8-0.1-7.5,0.6-11.3c0.4-2.1,0.1-4.3,0.1-6.7c-0.9,0-1.9-0.1-2.8-0.1c-2.4,0-4.7,0-7.1-0.1 c-5.1-0.3-10.2-0.6-15.4-1c-0.9-0.1-1.8-0.2-2.7-0.2c-1.3,0-1.5,0.3-1.5,1.6c0,3,0.1,6.1,0,9.1c-0.1,3.1-0.4,6.2-0.7,9.3 c-0.3,3.4-0.3,6.7,0.7,10.1c0.6,2,0.7,4.2,1.1,6.7c1.4,0,2.8,0,4.3,0c4.7,0,9.4-0.1,14-0.2c1.8,0,3.6,0,5.4,0 c3.4,0,6.8-0.1,10.3-0.1c1.1,0,2.2,0.3,3.3,0.4c2.2,0.4,4.4,0.8,6.6,1.2c1.6,0.3,2,0,2.1-1.6c0.1-1.3,0.1-2.5,0.1-3.8 c-0.1-6.6-0.1-13.2-0.2-19.9c-0.1-4.5-0.4-8.9-0.4-13.4c0-3.5,0.4-6.9,0.8-10.4c0.2-1.7,0.5-3.5,0.7-5.3c-2.5-0.2-4.7-0.4-6.9-0.5 c-4.1-0.2-8.2-0.6-12.3-0.5c-7.6,0.3-15.1-0.7-22.7-1.3c-5.3-0.4-10.7-0.1-16.1-0.1C23.4,11.7,19.6,11.9,15.4,12z"></path></svg>`
						})
					})
				}));

				// Niestosowne słownictwo
				if (
						!e.instance.props.expanded
					&&	e.instance.props.message.author.id != BDFDB.UserUtils.me.id
					&&	(
								ZeresPluginLibrary.DiscordAPI.currentChannel.id == chat_ogolny_id
							||	ZeresPluginLibrary.DiscordAPI.currentChannel.id == pomoc_supportu_id
						)
				) e.returnvalue.props.children.unshift(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.TooltipContainer, {
					key: "mention",
					text: "Niestosowne słownictwo",
					children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.Clickable, {
						className: BDFDB.disCN.messagetoolbarbutton,
						onClick: _ => {
							let delay_time = 0;
							let delay = function(min, max){ return delay_time += 1e3 * (Math.random() * (max - min)); };
							let delay_first_cmd = function(){ return delay(2, 3); };
							let delay_next_cmd = function(){ return delay(6, 9); };

							// delete message
							ZLibrary.DiscordModules.MessageActions.deleteMessage(ZeresPluginLibrary.DiscordAPI.currentChannel.id, e.instance.props.message.id);

							// warn user
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warn ${e.instance.props.message.author.id} Niestosowne słownictwo na kanale <#${ZeresPluginLibrary.DiscordAPI.currentChannel.id}>.`}); }, delay_first_cmd());

							// see user warnings
							setTimeout(function(){ ZLibrary.DiscordModules.MessageActions.sendMessage(komendy_id, {content:`!warnings ${e.instance.props.message.author.id}`}); }, delay_next_cmd());
						},
						children: BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SvgIcon, {
							className: BDFDB.disCN.messagetoolbaricon,
							iconSVG: `<svg height='24px' width='24px' fill="#FFFF40" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;"><g><path d="M12.5,60.2v-5.9h6.2l1.2-8.1h-5.4v-5.9h6.2l1.8-13h6.4l-1.8,13h6.4l1.8-13h6.4l-1.8,13h4.8v5.9h-5.7l-1.1,8.1h4.8v5.9h-5.7 l-1.8,13h-6.4l1.8-13h-6.3l-1.8,13h-6.4l1.8-13H12.5z M25,54.3h6.4l1.1-8.1h-6.3L25,54.3z"></path><path d="M70.2,31.7l1.8,5l-7.7,2.6l4.8,6.4l-4.3,3.2l-4.8-6.7l-4.6,6.7l-4.4-3.2l4.9-6.4l-7.6-2.6l1.8-5l7.4,2.9v-8.2h5.2v8.2 L70.2,31.7z"></path><path d="M87.7,63.1v10.1H77.4V63.1H87.7z M84.8,59.1h-4.7L77.7,39V26.4h9.7V39L84.8,59.1z"></path></g></svg>`
						})
					})
				}));
			}
		};
	})(window.BDFDB_Global.PluginUtils.buildPlugin(config));
})();
