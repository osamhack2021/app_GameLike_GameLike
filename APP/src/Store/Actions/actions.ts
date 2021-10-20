import type {Action} from 'redux';
import {ExpectedDataActions} from './expectedDataActions';
import {LevelActions} from './levelActions';
import {UserActions} from './userActions';

export type LoginActions = Action;

export type Actions = ExpectedDataActions | LevelActions | UserActions;
