import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ConsonantCardCollection from '../Consonant/Collection';
import ConsonantFiltersPanel from '../Consonant/FiltersPanel';
import ConsonantHeader from '../Consonant/Header';

const ConsonantPage = props => (
    <Fragment>
        <ConsonantHeader />
        <label>{props.config.poc_label}</label>
        <section className="consonant-page">
            <div className="consonant-page--inner">
                <ConsonantFiltersPanel />
                <div>
                    <ConsonantCardCollection
                        loadCards />
                </div>
            </div>
        </section>
    </Fragment>
);

export default ConsonantPage;

ConsonantPage.propTypes = {
    config: PropTypes.shape({
        poc_label: PropTypes.string,
    }),
};

ConsonantPage.defaultProps = {
    config: {
        poc_label: 'Default value',
    },
};
