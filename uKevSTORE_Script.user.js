// ==UserScript==
// @name         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  SteamDB & Steam Store & SteamUI - uKevSTORE Download Depot Manager
// @author       uKevSTORE
// @match        *://steamdb.info/app/*
// @match        *://store.steampowered.com/app/*
// @match        *://steamui.com/*
// @match        *://*.steamui.com/*
// @run-at       document-end
// @grant        none
// @updateURL    https://raw.githubusercontent.com/uKevo/uKev.github.io/main/uKevSTORE_Script.user.js
// @downloadURL  https://raw.githubusercontent.com/uKevo/uKev.github.io/main/uKevSTORE_Script.user.js
// ==/UserScript==

//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
//         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt

(function() {
    'use strict';
    function addSteamDbButton(appId) {
        const navLinks = document.querySelector('nav.app-links a');
        if (!navLinks) return;
        const link = document.createElement('a');
        link.innerText = 'uKevSTORE';
        link.href = `sai://app/${appId}`;
        navLinks.parentNode.insertBefore(link,navLinks);
    }
    function addSteamButton(appId) {
        const navLinks = document.querySelector('div.apphub_OtherSiteInfo');
        if (!navLinks) return;
        const link = document.createElement('a');
        link.className = 'btnv6_blue_hoverfade btn_medium';
        link.innerHTML = '<span>uKevSTORE</span>';
        link.href = `sai://app/${appId}`;
        navLinks.appendChild(link);
    }
    function addSteamUI(){
        for(let g of document.querySelectorAll(".game-item")){
            let app = g.querySelector("button.appid");
            let db = g.querySelector(".btn.btn-steamdb");
            if(app && db){
                let appId = app.innerText;
                if(!db.classList.contains("ms-2"))db.classList.add("ms-2");
                const pre = db.previousElementSibling;
                if(!pre || pre.name !="sai"){
                    const newLink = document.createElement('a');
                    newLink.name = "sai";
                    newLink.className = 'btn btn-custom ms-2';
                    newLink.href = `sai://app/${appId}`;
                    newLink.target = '_blank';
                    newLink.setAttribute('data-bs-toggle', 'tooltip');
                    newLink.title = 'uKevSTORE';
                    newLink.innerText = 'uKevSTORE';
                    db.parentNode.insertBefore(newLink, db);
                }
            }
        }
    }
    function observePage(appId) {
        const observer = new MutationObserver((mutations, obs) => {
            const navLinks = document.querySelector('nav.app-links');
            if (navLinks) {
                addSteamDbButton(appId);
                obs.disconnect();
            }
            const navLinks2 = document.querySelector('div.apphub_OtherSiteInfo');
            if (navLinks2) {
                addSteamButton(appId);
                obs.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    function observeUI(){
        const observer = new MutationObserver((mutations, obs) => {
            const gameItem = document.querySelector(".game-item");
            if(gameItem){
                addSteamUI();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    function getAppId() {
        const url = window.location.href;
        const appIdMatch = url.match(/\/app\/(\d+)/);
        return appIdMatch ? appIdMatch[1] : null;
    }
    const appId = getAppId();
    if (appId) {
        observePage(appId);
    }else{
        observeUI();
    }
})();

