/**
 * This is Promise based methods for Window.localStorage API
 * Abbreviation 'LS' means Local Storage in function namings here
 */

export interface ILSProperty {
  name: string;
  value: unknown;
}

/**
 * gets data string ASYNCRONIOUSLY from LS
 * @param {string} dataKey
 * @returns {Promise<string | null>}
 */
export const getFromLS = async (dataKey: string): Promise<string | null> => {
  const result = localStorage.getItem(dataKey);
  return result;
};

/**
 * gets data string SYNCRONIOUSLY from LS
 * @param {string} dataKey
 * @returns {string | null}
 */
export const getFromLSSync = (dataKey: string): string | null => {
  const result = localStorage.getItem(dataKey);
  return result;
};

/**
 * sets data to LS
 * @param {TLSProperty} property
 * @returns {Promise<boolean>}
 */
export const set2LS = async (property: ILSProperty): Promise<boolean | null> => {
  if (!property.name || !property.value) return null;

  const { name, value } = property;
  const val2Write = JSON.stringify(value);
  localStorage.setItem(name, val2Write);
  return localStorage.getItem(name) === val2Write;
};

/**
 * sets data SYNCRONIOUSLY to LS
 * @param {TLSProperty} property
 * @returns {boolean | null}
 */
export const set2LSSync = (property: ILSProperty): boolean | null => {
  if (!property.name || !property.value) return null;

  const { name, value } = property;
  const val2Write = JSON.stringify(value);
  localStorage.setItem(name, val2Write);
  return localStorage.getItem(name) === val2Write;
};

/**
 * removes some data from LS  by key name
 * @param {string} propName
 * @returns {Promise<boolean>}
 */
export const removeFromLS = async (propName: string) => {
  if (localStorage.getItem(propName)) {
    localStorage.removeItem(propName);
    return true;
  }

  return false;
};
