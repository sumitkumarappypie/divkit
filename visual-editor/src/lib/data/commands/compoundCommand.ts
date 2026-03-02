import type { State } from '../state';
import { BaseCommand } from './base';

export class CompoundCommand extends BaseCommand {
    private commands: BaseCommand[];

    constructor(commands: BaseCommand[]) {
        super();
        this.commands = commands;
    }

    undo(state: State): void {
        for (let i = this.commands.length - 1; i >= 0; i--) {
            this.commands[i].undo(state);
        }
    }

    redo(state: State): void {
        this.commands.forEach(cmd => cmd.redo(state));
    }

    canMerge(_other: BaseCommand): boolean {
        return false;
    }

    mergeMeWith(_other: this): void {
        throw new Error('Cannot merge CompoundCommand');
    }

    toLangKey(): string {
        return 'commands.set_property';
    }
}
