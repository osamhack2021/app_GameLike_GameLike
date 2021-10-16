import type {Action} from 'redux';
import {ExpectedDataActions} from './expectedDataActions';
import {LevelActions} from './levelActions';

export type LoginActions = Action;

export type Actions = ExpectedDataActions | LevelActions;
