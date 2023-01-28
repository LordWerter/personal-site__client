import FEATURES from './types/FEATURES';
import PROFILE_FEATURES from './types/PROFILE_FEATURES';
import OFFERS from './types/OFFERS';
import PARTNERS from './types/PARTNERS';
import PROFILE_PARTNERS from './types/PROFILE_PARTNERS';
import SUBSCRIBE_STEPS from './types/SUBSCRIBE_STEPS';

export type TCTheme = {
    FEATURES: typeof FEATURES;
    PROFILE_FEATURES: typeof PROFILE_FEATURES;
    OFFERS: typeof OFFERS;
    PROFILE_OFFERS: typeof OFFERS;
    PARTNERS: typeof PARTNERS;
    PROFILE_PARTNERS: typeof PROFILE_PARTNERS;
    SUBSCRIBE_STEPS: typeof SUBSCRIBE_STEPS;
};

export const CTheme: TCTheme = {
    FEATURES,
    PROFILE_FEATURES,
    OFFERS,
    PROFILE_OFFERS: OFFERS,
    PARTNERS,
    PROFILE_PARTNERS,
    SUBSCRIBE_STEPS,
};

export default CTheme;
