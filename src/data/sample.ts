import { DataComponent as DC } from '../runtime';
import { SampleTransform } from '../spec';

export type SampleOptions = Omit<SampleTransform, 'type'>;

/**
 * The sample data transform groups data with specified groupBy fields, and
 * sample data for each group when data.length >= threshold(default = 2000) for higher performance.
 */
export const Sample: DC<SampleTransform> = (options) => {
  const {
    field,
    groupBy = [],
    thresholds = 2000,
    strategy = 'median',
  } = options;
  return (data) => {
    // TODO
  };
};

Sample.props = {};
