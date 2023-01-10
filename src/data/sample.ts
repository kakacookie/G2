import { DataComponent as DC, Primitive } from '../runtime';
import { SampleTransform } from '../spec';

export type SampleOptions = Omit<SampleTransform, 'type'>;

/**
 * Split the array into frame with each frameSize.
 */
function getFrames(I: Primitive[], frameSize: number) {
  const size = I.length;
  const frames = [];
  let i = 0;
  while (i < size) {
    frames.push(I.slice(i, (i += frameSize)));
  }
  return frames;
}

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
    // 1. group data for single series data.
    // 2. get frame.
    // 3. sample with selector.
  };
};

Sample.props = {};
