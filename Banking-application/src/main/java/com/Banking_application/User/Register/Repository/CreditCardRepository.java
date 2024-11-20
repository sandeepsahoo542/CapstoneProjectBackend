package com.Banking_application.User.Register.Repository;


import com.Banking_application.User.Register.Entity.CreditEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditCardRepository extends JpaRepository<CreditEntity, Long> {

}