import '@citizenfx/server';
import { AceAllowed } from '../types';

export function addAce(principal: string | number, ace: string, allow: AceAllowed): void {
    if (typeof principal === 'number') principal = `player.${principal}`;

    ExecuteCommand(`add_ace ${principal} ${ace} ${allow}`);
}

export function removeAce(principal: string | number, ace: string, allow: AceAllowed): void {
    if (typeof principal === 'number') principal = `player.${principal}`;

    ExecuteCommand(`remove_ace ${principal} ${ace} ${allow}`);
}

export function addPrincipal(child: string | number, parent: string): void {
    if (typeof child === 'number') child = `player.${child}`;

    ExecuteCommand(`add_principal ${child} ${parent}`);
}

export function removePrincipal(child: string | number, parent: string): void {
    if (typeof child === 'number') child = `player.${child}`;

    ExecuteCommand(`remove_principal ${child} ${parent}`);
}

export function isPlayerAceAllowed(playerSrc: string, object: string): boolean {
    return IsPlayerAceAllowed(playerSrc, object);
}

export function isPrincipalAceAllowed(principal: string, object: string): boolean {
    return IsPlayerAceAllowed(principal, object);
}

export function isAceAllowed(object: string): boolean {
    return IsAceAllowed(object);
}
