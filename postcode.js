console.log(validPostcode("GB","BS65HA"));
console.log(postCodeLabel("IE"));

function postCodeLabel(countryCode) {
	var label = 'Postcode';
  switch (countryCode) {
      case 'IE':
          label = 'Eircode';
          break;
      case 'CA':
          label = 'Postal code';
          break;
      case 'US':
          label = 'ZIP code';
          break;
      case 'DE':
      case 'AT':
      case 'LI':
          label = 'PLZ';
          break;
      case 'IT':
          label = 'CAP';
          break;
      case 'BR':
          label = 'CEP';
          break;
      case 'CH':
          label = 'NPA/PLZ';
          break;
      case 'IN':
          label = 'PIN';
          break;
  }
  return label;
}

function validPostcode(countryCode, postcode) {
    postcode = postcode.replace(/\s/g, "");
    var regex = '';

    switch (countryCode) {
        case 'GB':
        case 'JE':
        case 'GG':
        case 'IM':
            regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
            break;
        case 'IE':
            regex = /^[AC-Y]{1}[0-9]{1}[0-9W]{1}[ \-]?[0-9AC-Y]{4}$/;
            break;
        case 'US':
        case 'PR':
            regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
            break;
        case 'CA':
            regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
            break;
        case 'AT':
        case 'AU':
            regex = /(^\d{4}$)|(^\d{4}-\d{4}$)/;
            break;
        case 'TW':
            regex = /(^\d{3}$)|(^\d{3}-\d{2}$)|(^\d{3}-\d{3}$)/;
            break;
        case 'IL':
            regex = /(^\d{7}$)|(^\d{5}$)/;
            break;
        case 'BE':
        case 'CY':
        case 'LU':
        case 'SI':
        case 'NZ':
        case 'DK':
        case 'CH':
        case 'AF':
        case 'AR':
        case 'HU':
        case 'GE':
        case 'LI':
        case 'NO':
        case 'MK':
        case 'ZA':
            regex = /(^\d{4}$)/;
            break;
        case 'IS':
        case 'OM':
        case 'PS':
            regex = /(^\d{3}$)/;
            break;
        case 'EE':
        case 'FR':
        case 'DE':
        case 'IT':
        case 'ES':
        case 'CZ':
        case 'HR':
        case 'MY':
        case 'TZ':
        case 'TH':
        case 'MX':
        case 'EG':
        case 'FI':
        case 'GR':
        case 'MV':
        case 'NI':
        case 'PK':
        case 'SE':
        case 'TR':
        case 'UA':
        case 'ZM':
            regex = /(^\d{5}$)/;
            break;
        case 'SG':
        case 'IN':
        case 'CN':
        case 'RU':
        case 'RO':
        case 'VN':
            regex = /(^\d{6}$)/;
            break;
        case 'JM':
            regex = /(^\d{2}$)/;
            break;
        case 'LV':
            regex = /^LV-\d{4}$/;
            break;
        case 'FO':
            regex = /^FO-\d{3}$/;
            break;
        case 'MT':
            regex = /^[A-Za-z]{3}?\d{4}$/;
            break;
        case 'MC':
            regex = /^980\d{2}$/;
            break;
        case 'NL':
            regex = /^\d{4}?[A-Za-z]{2}$/;
            break;
        case 'PT':
            regex = /(^\d{4}$)|(^\d{4}-\d{3}$)/;
            break;
        case 'BR':
            regex = /(^\d{5}$)|(^\d{5}-\d{3}$)/;
            break;
        case 'JP':
            regex = /(^\d{7}$)|(^\d{3}-\d{4}$)/;
            break;
        case 'PL':
            regex = /(^\d{2}-\d{3}$)/;
            break;
        case 'SM':
            regex = /^4789\d{1}$/;
            break;
    }

    if (regex === '') {
        if (postcode === '') return false;

        return true;
    }


    return regex.test(postcode);
}