import { BigInt } from "@graphprotocol/graph-ts"
import {
  BaseToken,
  Approval,
  MintFinished,
  OwnershipTransferred,
  RoleGranted,
  RoleRevoked,
  Transfer,
  TransferEnabled
} from "../generated/BaseToken/BaseToken"
import { Approval_, OwnershipTransferred_, RoleGranted_, 
  RoleRevoked_, Transfer_ } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let entity = Approval_.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new Approval_(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleMintFinished(event: MintFinished): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let entity = OwnershipTransferred_.load(event.params.previousOwner.toHex())

  if (entity == null) {
    entity = new OwnershipTransferred_(event.params.previousOwner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleRoleGranted(event: RoleGranted): void {
  let entity = RoleGranted_.load(event.params.role.toHex())

  if (entity == null) {
    entity = new RoleGranted_(event.params.role.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevoked): void {
  let entity = RoleRevoked_.load(event.params.role.toHex())

  if (entity == null) {
    entity = new RoleRevoked_(event.params.role.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = Transfer_.load(event.params.from.toHex())

  if (entity == null) {
    entity = new Transfer_(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleTransferEnabled(event: TransferEnabled): void {}
