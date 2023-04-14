import { Command, CommandContribution, CommandRegistry } from "@theia/core";
import { injectable } from "@theia/core/shared/inversify";

// project commands
export const NEW_PROJECT_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.new-project',
    label: 'New Project'
}, 'oniro/projectMenu/newProject');

export const NEW_MULTI_WORKSPACE_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.new-multi-project-workspace',
    label: 'new Multi-Project Worksapce...'
}, 'oniro/projectMenu/newMultiProjectWorkspace');

export const OPEN_PROJECT_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.open-project',
    label: 'Open Project'
}, 'oniro/projectMenu/openProject');

export const CLOSE_PROJECT_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.close-project',
    label: 'Close Project'
}, 'oniro/projectMenu/closeProject');

// build commands
export const CLEAN_TARGETS_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.clean-targets',
    label: 'Clean Targets'
}, 'oniro/projectMenu/cleanTargets');

export const BUILD_TARGET_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.build-target',
    label: 'Build Targets'
}, 'oniro/projectMenu/buildTargets');

export const REBUILD_TARGET_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.rebuild-targets',
    label: 'Rebuild all target files'
}, 'oniro/projectMenu/rebuildTargets');

export const BATCH_BUILD_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.batch-build',
    label: 'Batch build...'
}, 'oniro/projectMenu/batchBuild');

export const TRANSLATE_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.translate-project',
    label: 'Translate...'
}, 'oniro/projectMenu/translate');

export const STOP_BUILD_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.stop-build',
    label: 'Stop build'
}, 'oniro/projectMenu/stopBuild');

// project config commands
export const SELECT_DEVICE_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.device-select',
    label: 'Select Device...'
}, 'oniro/projectMenu/selectDevice');

export const REMOVE_ITEM_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.remove-project-item',
    label: 'Remove Item'
}, 'oniro/projectMenu/removeItem');

export const TARGET_OPTIONS_COMMAND = Command.toLocalizedCommand({
    id: 'oniro.target-options',
    label: 'Options...'
}, 'oniro/projectMenu/targetOptions');

@injectable()
export class ProjectCommandContribution implements CommandContribution {
    registerCommands(commands: CommandRegistry): void {
        // general project commands
        commands.registerCommand(NEW_PROJECT_COMMAND, {execute: () => {}});
        commands.registerCommand(NEW_MULTI_WORKSPACE_COMMAND, {execute: () => {}});
        commands.registerCommand(OPEN_PROJECT_COMMAND, {execute: () => {}});
        commands.registerCommand(CLOSE_PROJECT_COMMAND, {execute: () => {}});
        // project config commands
        commands.registerCommand(SELECT_DEVICE_COMMAND, {execute: () => {}});
        commands.registerCommand(REMOVE_ITEM_COMMAND, {execute: () => {}});
        commands.registerCommand(TARGET_OPTIONS_COMMAND, {execute: () => {}});
        // build commands
        commands.registerCommand(CLEAN_TARGETS_COMMAND, {execute: () => {}});
        commands.registerCommand(BUILD_TARGET_COMMAND, {execute: () => {}});
        commands.registerCommand(REBUILD_TARGET_COMMAND, {execute: () => {}});
        commands.registerCommand(BATCH_BUILD_COMMAND, {execute: () => {}});
        commands.registerCommand(TRANSLATE_COMMAND, {execute: () => {}});
        commands.registerCommand(STOP_BUILD_COMMAND, {execute: () => {}});
    }

}