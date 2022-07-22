import styled from 'styled-components';
import { color, fonts, resetCSS } from '@test_kit_3/styles';
import { Link } from 'react-router-dom';

// types
import type { LinkToProps } from './types';

// styles
type TStyleProps = Pick<LinkToProps, 'iconLayout'>;

const LinkStyled = styled.a`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    color: ${color.blue};
    display: inline-block;
    margin-top: auto;
    font-weight: 600;
    max-width: 100%;
    width: fit-content;
    height: fit-content;
    &:hover {
        filter: brightness(0.7);
    }
`;

const InternalLinkStyled = styled(Link)`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    color: ${color.blue};
    display: inline-block;
    font-weight: 600;
    max-width: 100%;
    width: fit-content;
    &:hover {
        filter: brightness(0.7);
    }
`;

const SpanStyledFlex = styled.span<TStyleProps>`
    align-items: baseline;
    display: flex;
    flex-direction: ${({ iconLayout }) =>
        iconLayout === 'leading' ? 'row' : 'row-reverse'};
    margin: ${(p) =>
        p.iconLayout === 'leading' ? 'auto 2px auto 4px' : 'auto 4px auto 2px'};

    svg {
        margin: ${(p) =>
            p.iconLayout === 'leading' ? 'auto 4px auto 0' : 'auto 0 auto 4px'};
    }
`;

const SpanStyledText = styled.span`
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default {
    InternalLinkStyled,
    LinkStyled,
    SpanStyledFlex,
    SpanStyledText,
};
