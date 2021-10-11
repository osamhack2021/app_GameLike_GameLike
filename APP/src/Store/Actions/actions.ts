import type {Action} from 'redux';
import {ExpectedDataActions} from './expectedDataActions';
import {QuestDataActions} from './questDataActions';
import {QuestGotoActions} from './questGotoActions';

export type LoginActions = Action;

export type Actions = QuestGotoActions | QuestDataActions | ExpectedDataActions;
