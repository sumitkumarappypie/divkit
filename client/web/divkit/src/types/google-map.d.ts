import type { Action, BooleanInt } from '../../typings/common';
import type { DivBaseData } from './base';
import type { DivAspect } from './image';

export interface GoogleMapMarker {
    type: 'google_map_marker';
    latitude: number;
    longitude: number;
    title?: string;
    color?: string;
    on_click_actions?: Action[];
}

export interface DivGoogleMapData extends DivBaseData {
    type: 'google_map';
    latitude: number;
    longitude: number;
    zoom?: number;
    map_type?: 'normal' | 'satellite' | 'terrain' | 'hybrid';
    api_key?: string;
    api_key_web?: string;
    markers?: GoogleMapMarker[];
    allow_zoom?: BooleanInt;
    allow_scroll?: BooleanInt;
    show_user_location?: BooleanInt;
    aspect?: DivAspect;
    on_ready_actions?: Action[];
    on_error_actions?: Action[];
}
