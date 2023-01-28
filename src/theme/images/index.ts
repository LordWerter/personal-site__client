import backgrounds from './backgrounds';
import banner from './banner';
import characters from './characters';
import controls from './controls';
import features from './features';
import logos from './logos';
import partners from './partners';
import priceWithBenefit from './priceWithProfit';
import subscribeSteps from './subscribeSteps';
import result from './result';
import sticks from './sticks';
import loader from './loader';
import icons from './icons';

export type TAllImages = typeof backgrounds &
    typeof banner &
    typeof characters &
    typeof controls &
    typeof features &
    typeof logos &
    typeof partners &
    typeof priceWithBenefit &
    typeof subscribeSteps &
    typeof result &
    typeof sticks &
    typeof loader &
    typeof icons;

export const allImages: TAllImages = {
    ...backgrounds,
    ...banner,
    ...characters,
    ...controls,
    ...features,
    ...logos,
    ...partners,
    ...priceWithBenefit,
    ...subscribeSteps,
    ...result,
    ...sticks,
    ...loader,
    ...icons,
};

export { default as backgrounds } from './backgrounds';
export { default as banner } from './banner';
export { default as characters } from './characters';
export { default as controls } from './controls';
export { default as features } from './features';
export { default as logos } from './logos';
export { default as partners } from './partners';
export { default as priceWithBenefit } from './priceWithProfit';
export { default as subscribeSteps } from './subscribeSteps';
export { default as result } from './result';
export { default as sticks } from './sticks';
export { default as loader } from './loader';
export { default as icons } from './icons';

export const {
    CHARACTERS__ALL,
    CHARACTERS__OFFER_PACK,
    CHARACTERS__OFFERS_RIGHT,
    CHARACTERS__OFFERS_AFTER_AUTH__LEFT,
    CHARACTERS__OFFERS_AFTER_AUTH__RIGHT,
    CHARACTERS__PARTNERS_BOTTOM,
    CHARACTERS__STEPS_LEFT,
    CHARACTERS__STEPS_RIGHT,
    CHARACTERS__STEPS_RIGHT_CLOSE,
    CONTROLS__ADD_CARD,
    CONTROLS__ARROW_LEFT,
    CONTROLS__ARROW_RIGHT,
    CONTROLS__ASK_ME,
    CONTROLS__BANK_CARD,
    CONTROLS__CROSS,
    CONTROLS__EXIT,
    CONTROLS__INFO,
    CONTROLS__PAYMENT,
    CONTROLS__PLUS,
    CONTROLS__PROFILE,
    CONTROLS__REMOVE,
    CONTROLS__SETTINGS,
    CONTROLS__BURGER_MENU,
    CONTROLS__CROSS_WHITE,
    CONTROLS__ARROW_LEFT__WHITE,
    CONTROLS__ARROW_RIGHT__WHITE,
    CONTROLS__INFO__WHITE,
    CONTROLS__CONTROL_SUBSCRIPTION,
    FEATURES__BAKERY,
    PROFILE_FEATURES__BAKERY,
    FEATURES__CASHBACK,
    PROFILE_FEATURES__CASHBACK,
    FEATURES__COFFEE,
    PROFILE_FEATURES__COFFEE,
    FEATURES__DELIVERY,
    PROFILE_FEATURES__DELIVERY,
    FEATURES__SPINOFF,
    PROFILE_FEATURES__SPINOFF,
    FEATURES__PACKED_FASTFOOD,
    PROFILE_FEATURES__PACKED_FASTFOOD,
    FEATURES__WEIGHTED_FASTFOOD,
    PROFILE_FEATURES__WEIGHTED_FASTFOOD,
    LOGOS__LOGO_FULL,
    LOGOS__X5_FULL,
    LOGOS__X5_SMALL,
    LOGOS__X5IDFULL,
    PARTNERS__VPROK,
    PARTNERS__INVITRO,
    PARTNERS__IVI,
    PARTNERS__ALIEXPRESS,
    PARTNERS__MNOGOLOSOSYA,
    PARTNERS__THE5POST,
    PARTNERS__SBERZVUK,
    PROFILE_PARTNERS__VPROK,
    PROFILE_PARTNERS__INVITRO,
    PROFILE_PARTNERS__IVI,
    PROFILE_PARTNERS__ALIEXPRESS,
    PROFILE_PARTNERS__MNOGOLOSOSYA,
    PROFILE_PARTNERS__THE5POST,
    PROFILE_PARTNERS__SBERZVUK,
    PRICE_WITH_PROFIT__CARD,
    PRICE_WITH_PROFIT__CUP,
    SUBSCRIBE_STEPS__STEP1,
    SUBSCRIBE_STEPS__STEP2,
    SUBSCRIBE_STEPS__STEP3,
    SUBSCRIBE_STEPS__STEP4,
    STICKS__X5ID,
    RESULT__PEREK,
    RESULT__PYATEROCHKA,
    RESULT__UNITED,
    RESULT__BG_SHAPE,
    LOYALTY_CARD__PEREKRESTOK,
    LOYALTY_CARD__THE5KA,
    RESULT__PACKAGE,
    BANNER__UNITED,
    BANNER__PEREKRESTOK,
    BANNER__THE5KA,
    LOADER__SPINNER,
    ICON__WARNING,
} = allImages;

export default allImages;
