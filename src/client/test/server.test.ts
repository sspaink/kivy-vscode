'use strict';

import { checkForKivyHeader } from '../../server/src/server';
import { expect } from 'chai';
import { Diagnostic } from '../../server/node_modules/vscode-languageserver';
import 'mocha';

describe('Check for Kivy header', () => {

	it('diagnostic should contain a message', () => {
		let diagnostics: Diagnostic[] = [];
		let firstLine: string = "";

		checkForKivyHeader(firstLine, diagnostics, true);
		expect(diagnostics[0].message).to.equal('Kivy files require #:kivy !');
	});

});
