import React, { useState, useEffect } from 'react';
import NativeSlider from '@fast-js/native-slider';
import { useTheme } from '@emotion/react';
import { ComponentProps } from 'types';
import { MiniCard } from 'features';
import {
    CWrap,
    SliderWrap,
    Track,
    Slide,
    ArrowsWrap,
    Arrow,
    LeftLine,
    RightLine,
} from './Carousel.styles';

export interface Props extends ComponentProps {
    params: {
        id: string;
    };
}

export const Carousel: React.FC<Props> = (): JSX.Element => {
    const [showLeftShadow, setShowLeftShadow] = useState(false);
    const [showRightShadow, setShowRightShadow] = useState(true);

    const id = 'PROJECT';
    const sizeId = 'DESKTOP';
    const sequense: any[] = [];

    // @ts-ignore
    const theme = { ...useTheme().Carousel[type] };

    const ids = {
        wrapper: id,
        track: `${id}-track`,
        leftArrow: `${id}-arrow__left`,
        rightArrow: `${id}-arrow__right`,
    };

    useEffect(() => {
        new NativeSlider({
            type: 'carousel',
            sliderId: id,
            trackId: ids.track,
            elementSelector: `.${id}__slide`,
            leftArrowId: ids.leftArrow,
            rightArrowId: ids.rightArrow,
            handle2FirstSlide: () => {
                setShowLeftShadow(false);
                setShowRightShadow(true);
            },
            handle2LastSlide: () => {
                setShowLeftShadow(true);
                setShowRightShadow(false);
            },
            handle2Slide: () => {
                setShowLeftShadow(true);
                setShowRightShadow(true);
            },
        });
    }, []);

    return (
        <CWrap id={ids.wrapper} sizeId={sizeId} theme={theme.cwrap} data-testid={''}>
            <LeftLine
                sizeId={sizeId}
                theme={theme.leftline}
                style={{
                    display: showLeftShadow ? 'block' : 'none',
                }}
                data-testid={''}
            />
            <RightLine
                sizeId={sizeId}
                theme={theme.rightline}
                style={{
                    display: showRightShadow ? 'block' : 'none',
                }}
                data-testid={''}
            />
            <SliderWrap
                sizeId={sizeId}
                theme={theme.sliderwrap}
                data-testid={''}>
                <Track id={ids.track} sizeId={sizeId} theme={theme.track}>
                    {sequense.map((_params: any, index: number) => {
                        return (
                            <Slide
                                key={index}
                                sizeId={sizeId}
                                theme={theme.slide}
                                data-testid={''}>
                                <MiniCard />
                            </Slide>
                        );
                    })}
                </Track>
            </SliderWrap>
            <ArrowsWrap sizeId={sizeId} theme={theme.arrowswrap} data-testid={''}>
                <Arrow
                    id={ids.leftArrow}
                    sizeId={sizeId}
                    theme={theme.leftarrow}
                    style={{
                        opacity: showLeftShadow ? '1' : '0.5',
                    }}
                    data-testid={''}
                />
                <Arrow
                    id={ids.rightArrow}
                    sizeId={sizeId}
                    theme={theme.rightarrow}
                    style={{
                        opacity: showRightShadow ? '1' : '0.5',
                    }}
                    data-testid={''}
                />
            </ArrowsWrap>
        </CWrap>
    );
};

export default Carousel;
