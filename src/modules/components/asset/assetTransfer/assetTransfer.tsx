import classNames from 'classnames';
import { useConfig } from 'wagmi';
import { Avatar, AvatarIcon, IconType, NumberFormat, formatterUtils } from '../../../../core';
import { type ICompositeAddress, type IWeb3ComponentProps } from '../../../types';
import { AssetTransferAddress } from './assetTransferAddress';

export interface IAssetTransferProps extends IWeb3ComponentProps {
    /**
     * Address (& optional ENS Name) of the transaction sender.
     */
    sender: ICompositeAddress;
    /**
     * Address (& optional ENS Name) of the transaction recipient.
     */
    recipient: ICompositeAddress;
    /**
     * Name of the asset transferred.
     */
    assetName: string;
    /**
     * Icon URL of the tranferred asset.
     */
    assetIconSrc?: string;
    /**
     * Asset amount that was transferred.
     */
    assetAmount: number | string;
    /**
     * Symbol of the asset transferred. Example: ETH, DAI, etc.
     */
    assetSymbol: string;
    /**
     * Price per asset in fiat.
     */
    assetFiatPrice?: number | string;
    /**
     * Transaction hash.
     */
    hash: string;
    /**
     * Chain ID of the transaction.
     */
    chainId?: number;
}

export const AssetTransfer: React.FC<IAssetTransferProps> = (props) => {
    const {
        sender,
        recipient,
        assetName,
        assetIconSrc,
        assetAmount,
        assetSymbol,
        assetFiatPrice,
        chainId,
        hash,
        wagmiConfig: wagmiConfigProps,
    } = props;

    const wagmiConfigProvider = useConfig();

    const wagmiConfig = wagmiConfigProps ?? wagmiConfigProvider;

    const processedChainId = chainId ?? wagmiConfig.chains[0].id;

    const currentChain = wagmiConfig.chains.find(({ id }) => id === processedChainId);
    const blockExplorerUrl = currentChain?.blockExplorers?.default.url;

    const blockExplorerAssembledHref = blockExplorerUrl ? `${blockExplorerUrl}/tx/${hash}` : undefined;

    const formattedTokenValue = formatterUtils.formatNumber(assetAmount, {
        format: NumberFormat.TOKEN_AMOUNT_SHORT,
        withSign: true,
        fallback: '-',
    });
    const fiatValue = Number(assetAmount) * Number(assetFiatPrice);
    const formattedFiatValue = formatterUtils.formatNumber(fiatValue, {
        format: NumberFormat.FIAT_TOTAL_SHORT,
        fallback: ` `,
    });
    const formattedTokenAmount = `${formattedTokenValue} ${assetSymbol}`;

    const assetTransferClassNames = classNames(
        'flex h-16 w-full items-center justify-between rounded-xl border border-neutral-100 bg-neutral-0 px-4', // base
        'hover:border-neutral-200 hover:shadow-neutral-md', // hover
        'focus:outline-none focus-visible:rounded-xl focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset', // focus
        'active:border-neutral-300 active:shadow-none', // active
        'md:h-20 md:px-6', // responsive
    );

    return (
        <div className="flex size-full flex-col gap-y-2 md:gap-y-3">
            <div className="relative flex h-full flex-col rounded-xl bg-neutral-0 md:flex-row">
                <AssetTransferAddress txRole="sender" participant={sender} blockExplorerUrl={blockExplorerUrl} />
                <div className="border-t border-neutral-100 md:border-l" />
                <AvatarIcon
                    icon={IconType.CHEVRON_DOWN}
                    size="sm"
                    className={classNames(
                        'absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-50 text-neutral-300', //base
                        'md:left-1/2 md:-translate-x-1/2 md:-rotate-90', //responsive
                    )}
                />
                <AssetTransferAddress txRole="recipient" participant={recipient} blockExplorerUrl={blockExplorerUrl} />
            </div>
            <a
                href={blockExplorerAssembledHref}
                target="_blank"
                rel="noopener noreferrer"
                className={assetTransferClassNames}
            >
                <div className="flex items-center space-x-3 md:space-x-4">
                    <Avatar responsiveSize={{ md: 'md' }} src={assetIconSrc} />
                    <span className="text-sm leading-tight text-neutral-800 md:text-base">{assetName}</span>
                </div>
                <div className="flex flex-col items-end justify-end">
                    <span className="text-sm leading-tight text-neutral-800 md:text-base">{formattedTokenAmount}</span>
                    <span className="text-sm leading-tight text-neutral-500 md:text-base">{formattedFiatValue}</span>
                </div>
            </a>
        </div>
    );
};