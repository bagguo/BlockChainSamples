package com.bagguo.bitcoin.mini.transaction;

import com.bagguo.bitcoin.mini.util.CryptologyUtil;

import java.security.PublicKey;


public class TransactionOutput {
    public String id;
    public PublicKey recipient;
    public float value;
    public String parentTransactionId;

    public TransactionOutput(PublicKey recipient, float value, String parentTransactionId) {
        this.recipient = recipient;
        this.value = value;
        this.parentTransactionId = parentTransactionId;
        this.id = CryptologyUtil.applySha256(CryptologyUtil.getStringFromKey(recipient) +
                Float.toString(value) + parentTransactionId);

    }

    public boolean isMine(PublicKey publicKey) {
        return (publicKey == recipient);
    }

}
