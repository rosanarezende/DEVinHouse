export const telefoneMask = (telefoneNumber) => {
  return telefoneNumber
    .replace(/\D/g, "")
    .replace(/^(\d\d)(\d)/g, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};

export const removeMask = (value) => Number(value?.replace(/\D/g, ""));
