const { PAYMENT_STATUS } = require('../config/constants');

function mapPaymentStatus(status) {
  switch (status) {
    case PAYMENT_STATUS.APPROVED:
      return 'approved';
    case PAYMENT_STATUS.PENDING:
      return 'pending';
    case PAYMENT_STATUS.REJECTED:
    case PAYMENT_STATUS.CANCELLED:
    case PAYMENT_STATUS.EXPIRED:
      return 'rejected';
    default:
      return 'unknown';
  }
}

module.exports = { mapPaymentStatus };