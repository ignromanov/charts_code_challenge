export interface CreateRequestTypes<ActionType extends string> {
	FAILURE: `${ActionType}_FAILURE`;
	REQUEST: `${ActionType}_REQUEST`;
	SUCCESS: `${ActionType}_SUCCESS`;
}
