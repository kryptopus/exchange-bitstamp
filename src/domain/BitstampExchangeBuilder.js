/* @flow */
import type {ExchangeBuilderInterface} from "kryptopus-exchange/src/domain/ExchangeBuilderInterface"
import BitstampExchange from "./BitstampExchange"

/**
 * Build Bitstamp exchanges
 */
export default class BitstampExchangeBuilder implements ExchangeBuilderInterface
{
    /**
     * Build a exchange instance
     *
     * @param   {any}               config      Exchange configuration
     * @return  {ExchangeInterface}             Exchange instance
     */
    build(config?:any):BitstampExchange
    {
        let exchange = new BitstampExchange;

        return exchange;
    }

}
