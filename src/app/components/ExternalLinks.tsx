import { ExternalLink, Flex, Link, Text } from "@dynatrace/strato-components";
import { NumberInput } from "@dynatrace/strato-components-preview";
import React from "react";

export const ExternalLinks = (props) => {
  return (
    <>
      <Flex flexDirection="column">
        {props.links.length == 0 ? <Text>N/A</Text> : props.links.map(item => {
          return (
            <ExternalLink href={item.link}>
              <Link>{item.name}</Link>
            </ExternalLink>
          )
        })}
      </Flex>
    </>
  )
}

export const ExternalLinksWithNumberInput = (props) => {
  return (
    <>
      <Flex flexDirection="column">
        {props.links.length == 0 ? <Text>N/A</Text> : props.links.map(item => {
          return (
            <Flex flexDirection="row">
              <NumberInput/>
              <ExternalLink href={item.link}>
                <Link>{item.name}</Link>
              </ExternalLink>
            </Flex>
          )
        })}
      </Flex>
    </>
  )
}