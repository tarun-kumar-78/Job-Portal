package com.jobportal.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import com.jobportal.dto.AccountType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "users")
public class User {

	private String id;
	private String name;
	private String email;
	private String password;
	private AccountType accountType;
}
