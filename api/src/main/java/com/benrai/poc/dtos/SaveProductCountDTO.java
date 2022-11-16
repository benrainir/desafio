package com.benrai.poc.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveProductCountDTO {
    private Integer quantity;
    private Long product_id;
    private Long box_id;
}
