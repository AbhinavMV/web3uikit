import styles from './PlanCard.styles';
import { IPlanCardProps } from './types';
import { Typography } from '../Typography';
import { color } from '@test_kit_3/styles';
import { Check } from '@test_kit_3/icons';
import YourPlanButton from './Components/YourPlanButton';

const { DivStyled, DivStyledFeatures, DivStyledCardFooter } = styles;

const PlanCard: React.FC<IPlanCardProps> = ({
    description,
    footer,
    subTitle,
    descriptionTitle,
    title,
    isActive,
    isCurrentPlan,
    ...props
}) => {
    return (
        <DivStyled
            className="PlanCard"
            data-testid="test-plan-card"
            isActive={isActive}
            {...props}
        >
            <Typography variant="subtitle1" weight="600" color={color.blueDark}>
                {subTitle}
            </Typography>
            <Typography>{title}</Typography>
            <DivStyledFeatures>
                <Typography
                    variant="caption14"
                    weight="semibold"
                    color={color.blueDark}
                >
                    {descriptionTitle}
                </Typography>
                {description.map((feature, index) => (
                    <div key={index}>
                        <Check
                            title="check icon"
                            titleId="plan-card check icon"
                            fill={color.green}
                        />
                        <Typography
                            variant="caption14"
                            weight="semibold"
                            color={color.grey}
                        >
                            {feature}
                        </Typography>
                    </div>
                ))}
            </DivStyledFeatures>
            <DivStyledCardFooter>
                {isCurrentPlan ? <YourPlanButton /> : footer}
            </DivStyledCardFooter>
        </DivStyled>
    );
};

export default PlanCard;
