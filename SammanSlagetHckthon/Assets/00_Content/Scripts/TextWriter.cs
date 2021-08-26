using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class TextWriter : MonoBehaviour {

	private TMP_Text textField;
	private string textToWrite;
	private float timePerChar;
	private int charIndex;
	private float timer;

	public void RecieveText(TMP_Text textField, string textToWrite, float timePerChar) {

		this.textField = textField;
		this.textToWrite = textToWrite;
		this.timePerChar = timePerChar;
		charIndex = 0;
	}

	void Update() {
		if(textField != null) {
			timer -= Time.deltaTime;
			if(timer <= 0f) {
				timer += timePerChar;
				charIndex++;
				textField.text = textToWrite.Substring(0, charIndex);

				//if we've written out the text, this nulls the textfield so that we wait for the next message it recieves.
				if(charIndex >= textToWrite.Length) {
					textField = null;
					return;
				}
			}
		}
	}
}
