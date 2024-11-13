// ==UserScript==
// @name         uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  SteamDB & Steam Store & SteamUI - uKevSTORE Download Depot Manager
// @author       uKevSTORE
// @match        *://steamdb.info/app/*
// @match        *://store.steampowered.com/app/*
// @match        *://steamui.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==


























































































// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt
// uKevSTORE - DISCORD: https://discord.gg/kmME4ddFqt

(function() {
    'use strict';

    function criarPaginaHtml(appId) {
        const conteudoHtml = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="refresh" content="2;url=sak://app/${appId}">
            <title>uKevSTORE</title>
            <style>
                body {
                    font-family: monospace;
                    background-color: #000;
                    color: #00FF00;
                    text-align: center;
                    padding-top: 100px;
                }
            </style>
        </head>
        <body>
            <pre>
:.......:::..::::..::........:::::...:::::::::......::::::..::::::.......:::..:::::..::........::::
':##::::'##:':##:::'##:'########:'##::::'##:::::'######::'########::'#######::'########::'########:
 :##:::: ##: :##::'##:: ##.....:: ##:::: ##::::'##... ##:... ##..::'##.... ##: ##.... ##: ##.....::
 :##:::: ##: :##:'##::: ##::::::: ##:::: ##:::: ##:::..::::: ##:::: ##:::: ##: ##:::: ##: ##:::::::
 :##:::: ##: :#####:::: ######::: ##:::: ##::::. ######::::: ##:::: ##:::: ##: ########:: ######:::
 :##:::: ##: :##. ##::: ##...::::. ##:: ##::::::..... ##:::: ##:::: ##:::: ##: ##.. ##::: ##...::::
 :##:::: ##: :##:. ##:: ##::::::::. ## ##::::::'##::: ##:::: ##:::: ##:::: ##: ##::. ##:: ##:::::::
..:#######:: :##::. ##: ########:::. ###:::::::. ######::::: ##::::. #######:: ##:::. ##: ########:
:.......:::..::::..::........:::::...:::::::::......::::::..::::::.......:::..:::::..::........::::
            </pre>
            <p>uKevSTORE no Discord: <a href="https://discord.gg/kmME4ddFqt" target="_blank">https://discord.gg/kmME4ddFqt</a></p>
            <p>uKevSTORE no Discord: <a href="https://discord.gg/kmME4ddFqt" target="_blank">https://discord.gg/kmME4ddFqt</a></p>
            <p>uKevSTORE no Discord: <a href="https://discord.gg/kmME4ddFqt" target="_blank">https://discord.gg/kmME4ddFqt</a></p>
            <p>uKevSTORE no Discord: <a href="https://discord.gg/kmME4ddFqt" target="_blank">https://discord.gg/kmME4ddFqt</a></p>
            <p>uKevSTORE no Discord: <a href="https://discord.gg/kmME4ddFqt" target="_blank">https://discord.gg/kmME4ddFqt</a></p>
            <p>uKevSTORE no Discord: <a href="https://discord.gg/kmME4ddFqt" target="_blank">https://discord.gg/kmME4ddFqt</a></p>
            <p>uKevSTORE no Discord: <a href="https://discord.gg/kmME4ddFqt" target="_blank">https://discord.gg/kmME4ddFqt</a></p>
            <p>uKevSTORE no Discord: <a href="https://discord.gg/kmME4ddFqt" target="_blank">https://discord.gg/kmME4ddFqt</a></p>
        </body>
        </html>`;

        const blob = new Blob([conteudoHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        return url;
    }

    function addButtonToNav(appId) {
        const navLinks = document.querySelector('nav.app-links') || document.querySelector('div.apphub_OtherSiteInfo');
        if (!navLinks) return;
        const link = document.createElement('a');
        link.innerText = 'uKevSTORE';
        link.href = criarPaginaHtml(appId);
        link.className = 'btn btn-medium'; // classe padrão para os botões
        if (navLinks.tagName === 'NAV') {
            navLinks.parentNode.insertBefore(link, navLinks);
        } else {
            navLinks.appendChild(link);
        }
    }

    function addSteamUIButtons(appId) {
        for (let g of document.querySelectorAll(".game-item")) {
            let app = g.querySelector("button.appid");
            let db = g.querySelector(".btn.btn-steamdb");
            if (app && db) {
                let appId = app.innerText;
                if (!db.classList.contains("ms-2")) db.classList.add("ms-2");
                const pre = db.previousElementSibling;
                if (!pre || pre.name !== "sai") {
                    const newLink = document.createElement('a');
                    newLink.name = "sai";
                    newLink.className = 'btn btn-custom ms-2';
                    newLink.href = criarPaginaHtml(appId);
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
            const navLinks2 = document.querySelector('div.apphub_OtherSiteInfo');

            if (navLinks || navLinks2) {
                addButtonToNav(appId);
                obs.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function observeUI() {
        const observer = new MutationObserver((mutations, obs) => {
            const gameItems = document.querySelectorAll(".game-item");
            if (gameItems.length > 0) {
                gameItems.forEach(item => {
                    const appId = item.querySelector("button.appid")?.innerText;
                    if (appId) addSteamUIButtons(appId);
                });
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
    } else {
        observeUI();
    }
})();
